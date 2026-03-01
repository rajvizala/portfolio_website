export interface GitHubPullRequest {
  id: number;
  title: string;
  html_url: string;
  state: "open" | "closed";
  merged_at: string | null;
  created_at: string;
  repo?: string;
}

export async function fetchPullRequests(
  username: string,
  token?: string
): Promise<{ merged: GitHubPullRequest[]; open: GitHubPullRequest[]; closed: GitHubPullRequest[] }> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(
    `https://api.github.com/search/issues?q=author:${username}+type:pr&per_page=30&sort=updated`,
    { headers, next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return { merged: [], open: [], closed: [] };
  }

  const data = await res.json();
  const items = data.items || [];

  const merged: GitHubPullRequest[] = [];
  const open: GitHubPullRequest[] = [];
  const closed: GitHubPullRequest[] = [];

  for (const item of items) {
    const pr: GitHubPullRequest = {
      id: item.id,
      title: item.title,
      html_url: item.html_url,
      state: item.state as "open" | "closed",
      merged_at: item.pull_request?.merged_at ?? null,
      created_at: item.created_at,
      repo: item.repository_url?.split("/").pop(),
    };

    if (pr.merged_at) merged.push(pr);
    else if (pr.state === "open") open.push(pr);
    else closed.push(pr);
  }

  return { merged, open, closed };
}

import { NextRequest } from "next/server";
import { fetchPullRequests } from "@/lib/github";

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") || "rajvizala";
  const token = process.env.GITHUB_TOKEN;

  const data = await fetchPullRequests(username, token || undefined);
  return Response.json(data);
}

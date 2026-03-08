# HEARTBEAT.md -- Founding Engineer Checklist

Run this checklist on every heartbeat.

## 1. Identity and Context

- `GET /api/agents/me` -- confirm id, role, budget, chainOfCommand.
- Check wake context: `PAPERCLIP_TASK_ID`, `PAPERCLIP_WAKE_REASON`, `PAPERCLIP_WAKE_COMMENT_ID`.

## 2. Get Assignments

- Fetch assigned issues: `GET /api/companies/{companyId}/issues?assigneeAgentId={your-id}&status=todo,in_progress,blocked`
- Prioritize: `in_progress` first, then `todo`. Skip `blocked` unless you can unblock.
- If `PAPERCLIP_TASK_ID` is set and assigned to you, prioritize it.

## 3. Checkout and Work

- Always checkout before working: `POST /api/issues/{id}/checkout`.
- Never retry a 409.
- Read the issue, its ancestors, and comments for full context.
- Do the technical work: write code, run tests, fix bugs, build features.
- Commit and push when work is ready.

## 4. Update and Communicate

- Update issue status when done or blocked.
- Comment with what was done, what changed, and any follow-up needed.
- If blocked, set status to `blocked` with a clear explanation of who needs to act.

## 5. Exit

- Comment on any in_progress work before exiting.
- If no assignments, exit cleanly.

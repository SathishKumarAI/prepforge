---
qid: ing_2c316c1dd6__star__local
question: 'Explain: Permission — Linux File Permissions Illustrated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 349
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:28-05:00'
sources: []
---

**Situation** – In my last role I was leading a migration of our CI pipeline from a legacy Jenkins setup to GitLab‑CI. The new runner ran as the user `gitlab-runner` on a shared Ubuntu host, and we discovered that some of the test artifacts were being left unreadable by downstream jobs because they were created with the default umask 022.

**Task** – I needed to ensure every job could read, write, and execute its own files while keeping them isolated from other users. The goal was to avoid permission errors without giving `gitlab-runner` full root access.

**Action** – I scripted a wrapper that set `umask 002` before each job and used the `setfacl` command to give group‑read/write rights on shared directories (e.g., `/var/ci/artifacts`). I also added a fallback check that ran `chmod -R g+rwX` on any stale files. The script was integrated into GitLab’s `.gitlab-ci.yml` as a before_script step, and we logged the effective permissions using `stat -c "%A %a"` for audit.

**Result** – After deployment, permission‑related failures dropped from 18% of jobs to 0%. The artifacts were accessible across stages, and our CI throughput improved by ~12 %. I learned that proactive ACL management can replace brittle umask hacks, especially in multi‑tenant environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_79d850d6c8__star__local
question: 'Explain: p95 time-to-first-token on answers regressed from 1.2 s to 3 s
  after a release. Walk me through finding and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 385
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:26-05:00'
sources: []
---

**Situation** – In late‑Q3 we rolled out a new version of our conversational AI service that added richer context handling. Two days after the release, automated monitoring showed the p95 time‑to‑first‑token (TTFT) jumped from 1.2 s to 3 s for 70% of users on the mobile app, eroding the 90‑percentile SLA.

**Task** – My goal was to isolate the cause, reduce TTFT back below 1.5 s, and prevent similar regressions in future releases while keeping the new context feature intact.

**Action** – I started by replaying traffic from a representative sample of user sessions on a staging environment that mirrored production latency. Profiling the model inference pipeline revealed an unexpected increase in the token‑generation batch size: the new context module was batching 32 requests instead of the original 8, causing GPU memory pressure and kernel launch overheads. I rewrote the batching logic to maintain a maximum of 12 concurrent batches per GPU, added dynamic batch sizing based on queue length, and introduced an early‑exit fallback for low‑priority queries. I also updated our CI pipeline to include a latency regression test that flags any p95 TTFT increase over 0.3 s.

**Result** – After deploying the fix, p95 TTFT returned to 1.4 s within one hour, and the SLA impact was limited to under 2 minutes of user‑visible delay. The new context feature remained fully functional, and our latency test now catches similar regressions before they reach production. I learned that even small changes in batch orchestration can disproportionately affect tail latency, so continuous profiling must accompany every model upgrade.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

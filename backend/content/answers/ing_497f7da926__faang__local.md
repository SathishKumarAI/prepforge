---
qid: ing_497f7da926__faang__local
question: Tell me about a time you disagreed with your team's technical direction.
  What did you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 415
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:48-05:00'
sources: []
---

**Clarify**  
The interviewer wants an example where I challenged the team’s chosen tech stack or architecture and how I navigated that disagreement. Assume the context: a mid‑size ML service under time pressure, with a senior engineer pushing a monolithic Python solution while I advocated a microservice + Docker/K8s approach.

**Approach**  
1. **Gather facts** – benchmarked latency/throughput, estimated cost of scaling, and risk of future maintenance.  
2. **Build a small proof‑of‑concept (PoC)** to quantify the trade‑offs.  
3. **Present data + business impact** in a concise deck: ops costs, deployment velocity, fault isolation.  
4. **Facilitate discussion** – ask the senior engineer what constraints they see and propose a hybrid compromise.

**Depth**  
- PoC ran on 2 nodes; showed 30 % latency drop and 40 % cost savings at scale.  
- Used Docker Compose locally to keep dev friction low, then ported to K8s for production.  
- Adopted CI/CD pipeline with automated unit & integration tests, reducing release cycle from 3 days to 12 h.  
- Complexity: added a container registry and service mesh; mitigated by reusing existing Helm charts.

**Edge cases**  
- If the PoC failed, we’d revert to the monolith and keep the Docker layer for future migration.  
- Tested failure scenarios (node loss, network partitions) to ensure graceful degradation.

**Optimize & communicate**  
I framed the narrative around *business value* rather than personal preference, which kept the tone constructive. After adoption, I documented the trade‑offs in a shared wiki and set up a quarterly review to measure the promised ROI. This iterative approach turned disagreement into a data‑driven decision that aligned with both engineering excellence and product timelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

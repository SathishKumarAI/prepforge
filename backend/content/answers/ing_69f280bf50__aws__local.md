---
qid: ing_69f280bf50__aws__local
question: 'Explain: Segmentation — Paging vs Segmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 551
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:51-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign the video‑streaming platform’s memory manager for a new micro‑service that processes user‑generated content in real time. The existing paging‑only system caused high latency and thrashing under peak loads, hurting our *Customer Obsession* KPI (average start‑up lag > 2 s).  

**Action**  
I led a cross‑functional sprint to evaluate **segmentation** as an alternative. We defined clear requirements:  
- *Scalability*: support up to 10 M concurrent users;  
- *Availability*: 99.9 % uptime;  
- *Cost*: stay within the $2 M/yr budget.  

I designed a hybrid model using **AWS Lambda** for stateless processing, backed by **Amazon DynamoDB** for metadata and **EFS** for fast, shared segment storage. Segments (e.g., audio, video, subtitles) are allocated in contiguous blocks on EFS, reducing page faults. I introduced **Application Load Balancer** routing to keep hot segments in memory via **Elasticache Redis**, while cold segments stay on EFS.  

I modeled cost vs performance with a Monte‑Carlo simulation: the new design cut average latency from 2.3 s to 0.6 s, reduced CPU utilization by 35 %, and lowered storage costs by 20 %.  

**Result**  
After deployment, our *Customer Obsession* metric improved by **42 %**, and we achieved a **99.97 % uptime** during the next two traffic spikes. The project earned us an internal “Innovation Award” and was later adopted across three other services.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for end‑to‑end redesign, from requirements to production rollout.  
- **Dive Deep** – Detailed cost/latency simulations, trade‑off analysis, and real‑time monitoring dashboards ensured we understood every layer of the stack.  

---

### What a Bar‑Raiser Listens For
| Signal | Why It Matters |
|--------|----------------|
| Quantified impact (42 % latency reduction) | Demonstrates measurable value |
| End‑to‑end ownership | Shows initiative and accountability |
| Deep technical dive (simulation, trade‑offs) | Signals depth of understanding |
| Learning from failure | Post‑mortem on a prior paging issue informed the new design |

This approach aligns with AWS’s focus on customer outcomes while showcasing rigorous engineering discipline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

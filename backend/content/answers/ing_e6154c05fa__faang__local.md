---
qid: ing_e6154c05fa__faang__local
question: 'Explain: Request Prioritization — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 444
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:33:15-05:00'
sources: []
---

**Clarify**  
We’re asked how an inference pipeline decides which model requests to serve first—i.e., *request prioritization*. Key assumptions: (1) multiple concurrent inference jobs, (2) limited compute/resources, (3) varying latency budgets and business value per request, (4) deterministic or stochastic resource usage per job.

**Approach**  
1. **Metric definition** – define a priority score combining SLA, revenue impact, and cost.  
2. **Queueing model** – use a weighted fair‑share scheduler that maps scores to service rates.  
3. **Dynamic adjustment** – monitor queue length/latency; back‑pressure lower‑priority jobs when load spikes.  
4. **Fallback** – if resources are exhausted, drop or defer the lowest score requests.

**Depth**  
- *Priority score*: `score = α·(SLA_weight) + β·(Revenue_per_request) – γ·(Estimated_GPU_time)`.  
- Scheduler runs in O(log n) using a max‑heap.  
- Resource estimation via profiling or predictive models (e.g., regression on input size).  
- Complexity: enqueue/dequeue O(log n), memory O(n).  
- Trade‑offs: higher α → stricter SLA compliance but possible revenue loss; lower γ → more aggressive scheduling but risk of GPU overload.

**Edge Cases**  
- Sudden burst of low‑priority requests overwhelms the queue—use rate limiting.  
- Misestimated resource usage leads to deadline misses—implement adaptive re‑scoring.  
- Homogeneous workloads (all same score) – fallback to round‑robin to avoid starvation.

**Optimize & Communicate**  
To improve, add a *feedback loop* that learns optimal α/β/γ from observed latency violations. Explain: “We’ll expose these knobs through a dashboard so ops can tweak SLA vs revenue trade‑offs in real time.” This showcases clear reasoning, technical depth, and operational awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

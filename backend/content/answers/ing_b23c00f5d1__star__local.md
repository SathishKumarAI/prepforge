---
qid: ing_b23c00f5d1__star__local
question: 'Explain: Disadvantages — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 312
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:11-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection pipeline for a fintech startup, we migrated from a batch‑processing model to an event‑driven architecture (EDA) so that new transaction data could be scored instantly.

**Task:**  
I had to evaluate whether the EDA would scale without sacrificing reliability or increasing operational overhead, and present the findings to senior management.

**Action:**  
I set up a series of experiments: first, I instrumented our Kafka topics with latency metrics; then I deployed a stateful stream‑processing job in Flink that maintained per‑customer risk scores. I monitored back‑pressure, message replay failures, and the complexity of managing schema evolution across microservices. I also compared the total cost of running three independent services (producer, broker, consumer) versus our previous single monolith.

**Result:**  
The EDA introduced a 30 % increase in infrastructure costs due to the need for redundant brokers and state stores. Latency spikes of up to 250 ms appeared during peak load because back‑pressure forced consumers to throttle, breaking our SLA of <50 ms. Additionally, we spent an extra week each sprint on debugging schema drift issues. I learned that while EDA offers near‑real‑time insights, it demands robust monitoring and higher operational overhead; for small‑to‑medium workloads a hybrid batch/stream approach can be more cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

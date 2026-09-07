---
qid: ing_8cbd58a167__faang__local
question: 'Explain: Throttling type and algorithms — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 639
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:34-05:00'
sources: []
---

## 1️⃣ Clarify  
We’re asked for a quick reference on **throttling** in ML systems: *why* we throttle, the main **types**, and common **algorithms** (with their trade‑offs). Assume the audience knows distributed inference pipelines but not every throttling nuance.

---

## 2️⃣ Approach  
1. Outline the motivation (rate limits, fairness, resource caps).  
2. Enumerate the two broad classes of throttling: *rate‑based* vs *resource‑based*.  
3. For each class list classic algorithms (Token Bucket, Leaky Bucket, Sliding Window, Exponential Backoff, Queue‑size caps).  
4. Briefly note complexity, latency impact, and typical use‑cases.

---

## 3️⃣ Depth  

| **Type** | **Goal** | **Key Algorithms** | **Complexity** | **Typical Use‑case** |
|----------|----------|--------------------|----------------|---------------------|
| **Rate‑based throttling** | Limit *events per time unit* (e.g., requests/sec) | • Token Bucket (O(1)) <br>• Leaky Bucket (O(1)) <br>• Sliding Window Log/Count (O(k)) | Fast, low overhead. | API gateways, inference rate limits. |
| **Resource‑based throttling** | Guard *CPU/GPU memory* or *queue depth* | • Queue‑size caps (O(1) per enqueue) <br>• Priority queues with admission control <br>• Dynamic batch sizing (adaptive batching) | Depends on queue implementation; often O(log n). | GPU inference servers, data‑plane backpressure. |
| **Fairness throttling** | Ensure *per‑user* or *per‑model* fairness | • Weighted Token Bucket <br>• Multi‑level feedback queues | Slightly higher overhead (maintain per‑client state). | Multi‑tenant MLaaS platforms. |

---

## 4️⃣ Edge Cases  
- **Burst traffic**: Token Bucket handles bursts; Sliding Window may misclassify if window is too short.  
- **Clock drift**: Leaky/Token Buckets rely on synchronized clocks; use monotonic timers.  
- **Stateful clients**: Weighted schemes need per‑client state, which can explode at scale—use sharding or probabilistic counters.  

---

## 5️⃣ Optimize & Communicate  
*Explain trade‑offs*: Token Bucket gives burst tolerance but may underutilize resources if tokens are never drained; Queue caps enforce strict resource limits but can increase latency.  
When presenting, start with the business goal (e.g., “prevent GPU overload”), pick the appropriate class, then justify the algorithm choice by mapping its properties to that goal. Conclude with a quick note on monitoring metrics: *token refill rate*, *queue depth histogram*, and *latency percentiles*.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

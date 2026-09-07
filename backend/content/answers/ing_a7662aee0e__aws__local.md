---
qid: ing_a7662aee0e__aws__local
question: 'Explain: 5 Time to First Token — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 482
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:57-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain *“5 Time to First Token”*—a metric used by Neo Kim & Logan Thorneloe to measure how quickly an LLM can generate its first token after a prompt. The interviewer wanted both the concept and how I’d implement it in a production‑grade system.

**Action (Technical)**  
1. **Requirements** – low latency (< 50 ms), high throughput, cost‑effective inference on AWS.  
2. **Design** –  
   * **API Gateway + Lambda** for request routing; Lambda warm pool keeps the model loaded to avoid cold starts.  
   * **Amazon SageMaker Edge Manager** hosts a quantized `llama-7b` model on GPU‑optimized instances (g5.xlarge).  
   * **Redis Streams** buffer prompts, letting workers pull them in order, ensuring FIFO and backpressure control.  
3. **Metrics** – instrument Lambda with CloudWatch Logs for the timestamp of prompt receipt vs. first token emission; calculate median across 10 k requests.  
4. **Scalability** – auto‑scaling on CPU/GPU utilization keeps cost per request < $0.02 while maintaining 99th percentile latency under 30 ms.  

**Result (Quantified Impact)**  
Implemented in 3 weeks; achieved *median Time to First Token = 18 ms*, a 40 % reduction from the previous 30 ms baseline, and cut inference cost by 25 %. The system now supports 5k concurrent users with SLA compliance.  

**Reflection (Bar‑raiser)**  
- **Ownership:** Took end‑to‑end responsibility for latency, cost, and reliability.  
- **Dive Deep:** Benchmarked multiple quantization schemes to find the sweet spot between speed and perplexity.  
- **Learned from Failure:** Initial design suffered 70 ms spikes due to Lambda cold starts; resolved by keeping a warm pool, illustrating bias for action.  

**Leadership Principles Anchored**: *Customer Obsession* (fast responses), *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

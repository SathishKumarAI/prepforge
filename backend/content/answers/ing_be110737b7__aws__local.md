---
qid: ing_be110737b7__aws__local
question: 'Q18: How do you choose between Claude Sonnet 4.6, GPT-5.5, and Gemini 3.1
  Pro for a production workload?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 746
total_tokens: 999
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:18-05:00'
sources: []
---

**Q18: How do you choose between Claude Sonnet 4.6, GPT‑5.5, and Gemini 3.1 Pro for a production workload?**

*Leadership Principles:* **Ownership** & **Dive Deep**  
I own the end‑to‑end ML pipeline and dig into every metric that matters to our customers.

---

### Situation
Our e‑commerce recommendation engine needed an LLM to generate product descriptions in real time, with < 200 ms latency per request, 99.9 % uptime, and cost under $0.01/req. We had three contenders: Claude Sonnet 4.6, GPT‑5.5, Gemini 3.1 Pro.

### Task
Select the model that maximizes customer value (speed, accuracy, cost) while meeting SLA constraints.

### Actions

| Check | How I evaluated |
|-------|-----------------|
| **Latency** | Benchmarked each with 10k concurrent requests on an EC2 g5.12xlarge (RTX A100). Sonnet: 145 ms; GPT‑5.5: 190 ms; Gemini: 120 ms. |
| **Accuracy** | Performed a 1,000‑sample human‑rated evaluation of description relevance & style. Scores: Sonnet 82%, GPT‑5.5 88%, Gemini 85%. |
| **Cost per inference** | Calculated using AWS Lambda + Bedrock pricing. Sonnet $0.0048/req; GPT‑5.5 $0.0061/req; Gemini $0.0039/req. |
| **Availability & SLA** | Used CloudWatch alarms on 99.95 % request success rate over a month. All models met 99.9 %, but Gemini had fewer timeout spikes. |
| **Scalability & Integration** | Chose Bedrock endpoints for all three; each supports auto‑scaling via Lambda concurrency limits and can be fronted by API Gateway + CloudFront for edge caching. |

### Result
I chose **Gemini 3.1 Pro** because it offered the best trade‑off: 120 ms latency, 85% accuracy (≈6 points higher than Sonnet), and lowest cost ($0.0039/req). Post‑deployment metrics over three months:

* **Latency:** 115 ± 12 ms (≤ 200 ms target)  
* **Accuracy:** Human rating 86% (↑ 1% vs baseline)  
* **Cost:** $3,720/month (≈ 15 % savings vs Sonnet)  
* **Uptime:** 99.98% (exceeded SLA)

**Bar‑raiser takeaways**

| What they listen for | How I demonstrated it |
|----------------------|------------------------|
| Ownership | Defined clear success metrics and drove the full evaluation cycle. |
| Dive Deep | Ran controlled latency & accuracy tests, quantified trade‑offs, and mapped to AWS services (Bedrock, Lambda, API Gateway). |
| Quantified Impact | Delivered 15 % cost savings while improving latency and maintaining high accuracy. |
| Learning from Failure | After initial pilot, we discovered a rare GPU driver issue that caused 3 ms jitter; I updated the AMI and added a health check to prevent recurrence. |

This structured, data‑driven approach ensured the chosen model met customer needs and AWS’s reliability standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

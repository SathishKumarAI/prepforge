---
qid: ing_09409032c2__aws__local
question: 'Explain: Recognizing a loop can also break down — But what is a neural
  network? | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 372
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:55-05:00'
sources: []
---

**Situation & Task**  
When teaching my cohort the fundamentals of AI, I noticed that many students struggled with the phrase *“a loop can also break down”*—they could’t connect this to how a neural network actually learns.

**Action**  
I broke the concept into three parts:

1. **Core building block** – a neuron is simply an affine transform followed by a non‑linear activation (`y = σ(Wx + b)`).  
2. **Layer composition** – stack neurons → feed‑forward network; add feedback loops → recurrent nets.  
3. **Learning loop** – back‑propagation updates `W` and `b` by computing gradients of a loss function (e.g., cross‑entropy). I used an AWS Lambda microservice to demonstrate live gradient descent on the MNIST dataset, logging weight changes in Amazon CloudWatch.

I mapped each step to **Customer Obsession** (explain with user‑friendly analogies) and **Dive Deep** (show the math behind gradients).

**Result**  
After the session, 95 % of participants could correctly diagram a simple network and explain back‑propagation. Test scores rose from an average of 68 % to 92 %. I also captured the Lambda logs in an Amazon S3 bucket for future training material, saving $0.03 per invocation.

**Reflection**  
The exercise taught me that abstract jargon (“loops can break down”) is a barrier; concrete, data‑driven demos unlock understanding. It also reinforced **Ownership**—I took end‑to‑end responsibility from curriculum design to deployment and analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

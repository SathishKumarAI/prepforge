---
qid: ing_34e9e78fc5__fp__local
question: 'Explain: Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 389
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:57:03-05:00'
sources: []
---

**Why a client‑server split is essential for scalable ML**

At its core an ML service must *learn* (train) and *apply* (infer).  
Training consumes large data sets, heavy compute, and persistent state; inference requires low latency and high concurrency.  Treating them as a single monolithic process forces a trade‑off: either expose the entire training stack to every client (wasteful, insecure) or embed inference in a tight loop that cannot evolve without downtime.

**Optimization principle**  
The client–server model separates *model space* from *request space*.  The server sits at the optimum of the cost function for the current dataset; the client merely samples from it.  This mirrors convex optimization where you keep the gradient estimator (client) decoupled from the heavy matrix operations (server).  It also allows *online learning*: clients can send gradients back, and the server updates the global model in a distributed fashion.

**Information‑theoretic insight**  
The server compresses high‑dimensional data into a low‑dimensional embedding (the model).  Clients only transmit the compressed inference request, drastically reducing bandwidth.  This is an explicit instance of *rate–distortion theory* applied to ML pipelines.

**Non‑obvious takeaway**  
Because the server holds the *stateful* model, it becomes a natural place for *contextual bandit* exploration: by observing which client queries arrive and how they are answered, the server can actively probe uncertain regions of feature space without any client modification.  This turns passive inference traffic into an opportunistic data‑collection loop that speeds up continual learning—something most designs overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

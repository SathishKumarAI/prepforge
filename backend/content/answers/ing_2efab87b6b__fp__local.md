---
qid: ing_2efab87b6b__fp__local
question: 'Explain: a hundred tokens per second is how — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 471
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:44:43-05:00'
sources: []
---

**Why “hundred tokens per second” matters in DynamoDB’s design**

At its core, DynamoDB is a *distributed key‑value store* that must keep every read or write operation within the same millisecond window, even when scaling to billions of items and millions of clients. The **token bucket** abstraction is the mathematical engine that guarantees this latency while allowing the system to burst.

1. **Throughput vs. Latency**  
   Each token represents an *atomic request* (a read or write). Tokens are replenished at a fixed rate (e.g., 100 tokens/s) but can accumulate up to a configured bucket size. When a client issues a request, it consumes one token. If the bucket is empty, the request waits until a token arrives—ensuring that the *average* request rate never exceeds the provisioned throughput.

2. **Bursting as a geometric buffer**  
   The bucket’s capacity acts like a geometric buffer that absorbs short‑term spikes. Mathematically, this is equivalent to convolving the incoming traffic with an exponential decay kernel: the system can sustain bursts of up to *capacity* requests while maintaining the long‑run average rate.

3. **Connection to stochastic processes**  
   In queueing theory, a token bucket corresponds to a *M/M/1* queue with a service rate equal to the refill rate and a finite buffer (the bucket). The probability that a request is delayed is given by the Erlang‑B formula, which DynamoDB tunes so that delay probabilities stay below 0.01 % for typical workloads.

4. **Non‑obvious insight: tokens as *memory cells***  
   A token is not just a counter; it implicitly represents a *commitment* of CPU and I/O resources on the node that will serve the request. By tying each token to a pre‑allocated “execution context,” DynamoDB avoids the overhead of dynamic allocation for every operation, keeping latency deterministic.

In summary, the **hundred tokens per second** rule is a carefully calibrated balance: it limits sustained throughput, permits controlled bursts, and aligns with queueing theory to guarantee sub‑millisecond latencies at petabyte scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

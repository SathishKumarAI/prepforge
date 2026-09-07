---
qid: vq_0b2efb05fb__aws__local
question: Which explanation describes this error?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 391
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:11-05:00'
sources: []
---

**Situation**  
While refactoring a legacy Java service that served 12 M daily API calls, I introduced an iterative‑DFS routine to traverse a large graph (≈ 10⁶ nodes). The new code returned “StackOverflowError” under production load.

**Task**  
Identify the root cause and redesign the traversal so it can scale to millions of concurrent requests without exceeding JVM limits.

**Action**  
1. **Dive Deep** – profiled with VisualVM; the stack depth hit 8 k frames, far above the default `-Xss512k`.  
2. Noted that the graph had many long linear chains (depth > 10⁴).  
3. Replaced recursion with an explicit stack (`ArrayDeque`) and limited frame size to 32 bytes per node.  
4. Leveraged **AWS Lambda** for stateless execution, setting `reservedConcurrentExecutions` to 5000 to isolate bursts.  
5. Added **Amazon CloudWatch Metrics** (latency, error rate) and an alerting rule that triggers auto‑scaling of the underlying EC2 fleet.

**Result**  
- Stack overflows eliminated; average latency dropped from 320 ms to 95 ms (+70 % improvement).  
- Cost reduced by 30 % due to efficient memory use.  
- The redesign was adopted across all microservices, improving overall SLA from 99.7 % to 99.99 %.

**Reflection**  
I learned that a seemingly small recursion depth can explode under production traffic; always validate assumptions with real‑world data and iterate quickly—core to **Ownership** and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

---
qid: ing_10744a402a__fp__local
question: You have 10 hours of demonstrations for a new task and budget for 50 more.
  How do you decide what to collect, and what return do you expect?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 390
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:40:20-05:00'
sources: []
---

**From the data‑efficiency objective**

The problem is *how many labeled samples are needed so that a learning algorithm reaches a target performance* while minimizing cost.  
Let \(R(t)\) be the expected generalization error after training on \(t\) demonstrations, and let \(C(t)=c_0+t\,c_{\text{demo}}\) be the linear cost (the first 10 hours are already paid).  
The optimal budget allocation solves  

\[
\min_{t}\; C(t)\quad \text{s.t.}\quad R(t)\leq \varepsilon .
\]

In practice \(R(t)\) is unknown, but we can estimate it from the **learning curve** obtained on the initial 10 hours: fit a parametric form (e.g., \(R(t)=a\,t^{-b}+c\)).  
The *marginal benefit* of an extra demonstration is \(\Delta R=\frac{dR}{dt}\); when \(|\Delta R|<\frac{\text{budget per demo}}{\text{slope}}\), additional data are not worthwhile.

**Non‑obvious insight**  
A large initial sample often *reduces variance* in the learning curve estimate, allowing a more accurate prediction of the diminishing returns point. Thus investing a small extra budget early (e.g., 5–10 more hours) can pay off by preventing over‑sampling later.

**Expected return**  
If the fitted curve predicts \(R(60)\approx0.15\) and the target is \(\varepsilon=0.12\), you would need roughly 80 demos; with a budget for only 50 more, the best you can guarantee is an error around 0.18–0.20—acceptable if your application tolerates that margin.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

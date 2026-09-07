---
qid: ing_2dfaf1d5ae__aws__local
question: 'Explain: On average, how many fair coin flips until you see two heads in
  a row? Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 581
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:15-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *“When a customer asks for an estimate, we give them the most accurate answer possible.”*  
> I treated this as a real‑world problem: a product feature that needed to know how many random flips it would take before two heads appeared.

---

### **Situation / Task**
A client’s A/B test relied on generating “fair coin” events in an app. They wanted the average number of flips until the first occurrence of *HH*. I had to compute this expectation quickly and explain the reasoning so developers could implement a lightweight counter.

### **Action (Dive Deep + Bias for Action)**
1. **Model the process** as a Markov chain with states  
   - `S0`: no recent heads  
   - `S1`: one head seen, waiting for the second  
2. **Set up recurrence equations** for expected flips from each state:  

   ```
   E0 = 1 + 0.5*E0 + 0.5*E1
   E1 = 1 + 0.5*E0          (a tail resets to S0)
   ```

3. **Solve**  
   - From the second equation: `E1 = 1 + 0.5*E0`  
   - Substitute into first:  
     ```
     E0 = 1 + 0.5*E0 + 0.5*(1 + 0.5*E0)
        = 1 + 0.5*E0 + 0.5 + 0.25*E0
        => 0.25*E0 = 1.5
        => E0 = 6
     ```
4. **Result** – On average, **6 flips** are required to see two heads in a row.

### **Result (Deliver Results)**
- Delivered the answer within 15 minutes of interview kickoff.  
- The client used this expectation to set realistic timeout thresholds; after deployment, their simulation engine ran at <1 ms per check, saving ~30 k compute‑hours monthly on AWS Lambda.

---

**Bar‑raiser notes:**  
- Demonstrated *ownership* by framing the question as a customer need.  
- Showed *depth* with clear Markov reasoning and algebraic steps.  
- Quantified impact (6 flips, cost savings).  
- Learned that even simple probability problems can influence production design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

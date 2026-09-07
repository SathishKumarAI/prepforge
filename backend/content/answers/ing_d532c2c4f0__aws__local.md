---
qid: ing_d532c2c4f0__aws__local
question: Your annotators have no ground truth - the tasks are subjective preference
  judgments. How do you measure and improve label quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 443
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:48-05:00'
sources: []
---

**Situation / Task**  
In a new AI product we were asked to train a model on user preference data (e.g., “Which ad copy is more persuasive?”). The only labels came from our own annotators, and there was no objective ground truth.

**Action**  
1. **Ownership & Bias for Action:** I built an *annotation‑quality pipeline* in AWS.  
   * **Amazon SageMaker Ground Truth** created a *reference set* by crowd‑sourcing 5 independent judgments per item. The majority vote became the provisional gold standard.  
   * I added a *confidence score* (Jaccard similarity across annotators) and stored it in **DynamoDB**.  
2. **Dive Deep & Invent & Simplify:** Using **Amazon SageMaker Experiments**, I ran A/B tests on different pre‑training models, feeding only high‑confidence labels to one branch and all labels to another.  
3. **Deliver Results:** The high‑confidence pipeline reduced label noise by 32 % (measured via cross‑entropy loss) and improved downstream accuracy from 78 % to 86 %.  

**Result**  
The new system cut annotation time per item by 40 %, lowered cost by $0.02 per sample, and earned a **Customer Obsession** bonus for delivering a more reliable product faster.

---

### What a bar‑raiser hears

| Expectation | How I met it |
|-------------|--------------|
| Ownership | Led the entire end‑to‑end pipeline redesign |
| Dive Deep | Quantified noise reduction and correlated with model gains |
| Quantified Impact | 32 % noise drop, 8 % accuracy lift, $0.02 cost saving |
| Learning from Failure | Iterated on confidence thresholds after initial over‑reliance on majority votes |

*All metrics are derived from production logs in **CloudWatch** and stored in a **Redshift** analytics table for auditability.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

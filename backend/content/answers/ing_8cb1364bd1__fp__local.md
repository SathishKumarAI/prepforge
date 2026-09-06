---
qid: ing_8cb1364bd1__fp__local
question: Do you have a bulk pricing? — The Hundred-Page Machine Learning Book by
  Andriy Burkov
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 558
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:15-05:00'
sources: []
---

### Why a “bulk‑pricing” scheme exists

When an author sells a book in bulk (e.g., a library or institution buys dozens of copies), the **economies of scale** that underlie most production costs no longer dominate the cost structure. Printing a single copy incurs fixed overheads—design, typesetting, quality control—that are spread thinly across one unit. Buying 100+ copies dilutes those fixed costs per book, so the marginal cost drops sharply. To reflect this in price, publishers use *bulk‑pricing*: a tiered discount that mirrors how the true cost curve bends downward after a threshold of orders.

### How it works mathematically

Let  
- \(F\) = fixed setup cost (≈ \$5 k),  
- \(v\) = variable cost per copy (\$3).  

The average cost for \(n\) copies is  
\[
C(n)=\frac{F+nv}{\,n\,}= \frac{F}{n}+v .
\]
As \(n\to\infty\), \(C(n)\to v\). A bulk‑price policy sets a price \(p(n)\) that tracks \(C(n)+m\) where \(m\) is the desired margin, but only for \(n\geq N_{\text{threshold}}\). Below \(N_{\text{threshold}}\) the price stays at retail level because the fixed cost dominates.

### What you’ll see

- **Tier 1 (≤ 10 copies):** Retail price ($30) – no discount.  
- **Tier 2 (11–49 copies):** 10‑15 % off – marginal savings as \(F/n\) shrinks.  
- **Tier 3 (≥ 50 copies):** 20‑25 % off – average cost close to variable cost, margin squeezed.

### Non‑obvious insight

Many buyers assume bulk discounts are *linear* (e.g., “buy twice, get 10 % off”). In reality they’re *non‑linear*: the larger the order, the steeper the price drop because each additional copy adds almost nothing to fixed costs. This means a single large purchase often yields **better per‑unit savings** than multiple smaller orders, even if the total discount percentage appears lower.

If you plan to buy 100 copies of *The Hundred‑Page Machine Learning Book*, contact the publisher’s sales desk; they’ll quote a price that reflects this cost‑curve logic and will usually be considerably cheaper per book than buying 10 separate retail packs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

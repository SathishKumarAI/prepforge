---
qid: q089
question: "What is funnel analysis and how do you use it?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At an online marketplace, the growth team knew checkout conversion was weak but had no idea where buyers were dropping off. We were spending on ads to pour more users into a leaky bucket.

**Task** I was tasked with pinpointing exactly where in the purchase flow we were losing people so we could fix the biggest leak first.

**Action** I built a funnel analysis over our event data: view product, add to cart, start checkout, enter payment, complete order. For each step I counted distinct users and computed the step-to-step conversion rate, using a SQL query that joined sequential events by user and timestamp. The funnel exposed that only 45% of people who started checkout ever reached the payment step, a massive cliff. I dug into that stage and found the shipping cost only appeared there, causing sticker shock, so I recommended showing shipping earlier.

**Result** After surfacing shipping costs on the cart page, the checkout-to-payment step improved by about 18 points, lifting overall conversion roughly 6%. The lesson I took away: funnel analysis turns a vague "conversion is low" into a specific, fixable step, so you invest effort exactly where the drop-off is worst.

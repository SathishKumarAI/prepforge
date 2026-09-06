---
qid: ing_9c9c87dfc6__think__local
question: 'Explain: With the compound key, it makes removal — FAANG System Design
  Interview: Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 479
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:25:02-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- Identify what “compound key” refers to in a database context (e.g., composite primary key made of two or more columns).  
- Assume we’re designing a location‑based service like Yelp/Google Places where each *place* can have many *reviews*, and users may want to delete a review.  

**2️⃣ Pick the mental model / framework**  
Use the “key–value” vs. “relational” data‑model dichotomy, then zoom into **index design for deletions**:  
- How primary keys affect lookup time.  
- How composite keys help enforce uniqueness and speed up delete operations.  

**3️⃣ Step‑by‑step reasoning**  
1. Show that a simple key (e.g., review_id) alone can locate the record in O(log n).  
2. Explain why we need a compound key: `(user_id, place_id)` ensures a user can only have one review per place and lets us delete *that* review without scanning all reviews for the place.  
3. Illustrate the deletion process: hash lookup → locate row via composite index → constant‑time removal in B‑tree.  
4. Contrast with a naive design where we’d search all reviews of a place, leading to O(k) time (k = #reviews).  

**4️⃣ Common traps to avoid**  
- Forgetting that the compound key must be indexed; otherwise deletion remains linear.  
- Assuming composite keys automatically prevent duplicate reviews—clarify that uniqueness constraints enforce this.  
- Ignoring secondary indexes needed for other queries (e.g., “top reviews by rating”).  

**5️⃣ Sanity‑check & verbalize**  
- Verify the time complexity: O(log n) vs. O(k).  
- Ask: does the composite key cover all deletion scenarios? If a user wants to delete *all* their reviews, we can index on `user_id` alone.  
- Communicate clearly: “By using a compound key of (user_id, place_id), we give the DB engine exactly the two pieces it needs to find and drop a review in logarithmic time, eliminating the need to scan every review for that location.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

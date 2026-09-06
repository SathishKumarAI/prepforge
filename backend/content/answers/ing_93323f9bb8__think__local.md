---
qid: ing_93323f9bb8__think__local
question: 'Explain: Secondary Indexes - DynamoDB — AWS-Services/1_Databases/AmazonDynamoDB/SecondaryIndexes.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 554
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:49:06-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**

- *What* is asked?  Explain **secondary indexes in DynamoDB** as presented in that GitHub file.  
- Assume the reader knows basic DynamoDB concepts (tables, primary key) but not index details.  
- Focus on **Global Secondary Indexes (GSI)** and **Local Secondary Indexes (LSI)**—the two types.

---

**2️⃣ Build a mental model**

1. **Primary key → natural ordering** of items in a table.  
2. **Index = alternate primary key** that lets you query by other attributes without scanning the whole table.  
3. **GSI vs LSI**: GSI can use any partition key (even different from the table’s), LSI shares the same partition key but allows a new sort key.  
4. Each index has its own provisioned throughput or on‑demand mode.

---

**3️⃣ Step‑by‑step reasoning**

1. **Explain why indexes are needed** – read‑heavy workloads, efficient queries on non‑primary attributes.  
2. **Describe LSI**: created at table creation time; same partition key, different sort key; limited to 5 per table.  
3. **Describe GSI**: can be added later; separate key schema; unlimited count; can have projection types (keys only / all attributes).  
4. **Projection** – what data is stored in the index and how it affects read cost.  
5. **Throughput considerations** – indexes consume read/write capacity separately.  
6. **Consistency model** – LSI supports strongly consistent reads, GSI does not.  
7. **Use‑case examples** – e.g., querying users by email (GSI) or ordering posts by date within a user (LSI).

---

**4️⃣ Common traps to avoid**

- Mixing up *primary key* vs *index key*.  
- Forgetting that LSIs must be defined at table creation.  
- Overlooking that indexes have **own capacity**; neglecting this can lead to throttling.  
- Assuming GSI can return all attributes unless projection is set correctly.

---

**5️⃣ Sanity‑check & communicate**

- Re‑state the difference between LSI and GSI in one sentence each.  
- Verify that the index key schema actually matches the attribute names used in example queries.  
- End with a quick “Why it matters”: indexes let you query efficiently, but they cost extra capacity.

Follow this flow whenever explaining DynamoDB secondary indexes to ensure clarity, completeness, and avoidance of common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

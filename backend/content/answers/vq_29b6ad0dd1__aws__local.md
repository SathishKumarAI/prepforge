---
qid: vq_29b6ad0dd1__aws__local
question: WHEN WOULD YOU USE A LEFT JOIN INSTEAD OF AN INNER JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 599
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:21-05:00'
sources: []
---

**When would you use a left join instead of an inner join?**

> **Situation:** While refactoring the nightly ETL that feeds our marketing analytics dashboard, I discovered that the `campaigns` table contains campaigns that have never yet been assigned to any `ad_groups`.  
> **Task:** The reporting team needed *all* campaigns in the visualizations, even those without ad groups, so they could track budget allocation gaps.  
> **Action:** I replaced the existing `INNER JOIN` between `campaigns` and `ad_groups` with a `LEFT JOIN`. In SQL:

```sql
SELECT c.id,
       c.name,
       ag.group_name
FROM   campaigns AS c
LEFT JOIN ad_groups AS ag ON c.id = ag.campaign_id;
```

> I also added a `COALESCE(ag.group_name, 'Unassigned')` to keep the UI clean.  
> **Result:** The dashboard now displays 100 % of campaigns (≈ 12k rows) instead of only ~8k that had ad groups, reducing “missing data” alerts by 92%. In production, the query runs in < 250 ms on an RDS Aurora cluster (10 GB), costing <$0.05 per day.

**Leadership Principles Anchored**

| Principle | How it shows |
|-----------|--------------|
| **Ownership** | Took end‑to‑end responsibility for data quality and user experience. |
| **Dive Deep** | Analyzed query plans, examined cardinality, and validated business impact with metrics. |

**Technical/System Design (AWS Context)**

- **Services:** Amazon RDS Aurora (PostgreSQL) for transactional storage; Athena on S3 for ad-hoc analysis; Redshift Spectrum if the dataset grows beyond 50 GB.  
- **Scalability & Availability:** The `LEFT JOIN` keeps read‑scale linear; using read replicas distributes load during peak report generation.  
- **Cost Trade‑offs:** Adding a left join increases row count by ~30%; however, the marginal cost is negligible compared to the business value of complete reporting.  

**What a Bar‑Raiser Looks For**

1. **Ownership & Impact:** I identified a hidden requirement and quantified its effect on stakeholders.  
2. **Depth (Dive Deep):** I validated the join change against query plans and monitored performance post‑deployment.  
3. **Learning from Failure:** Initial reports missed 8 k campaigns; after implementing the left join, we eliminated those gaps and reduced support tickets.

---

*In short, use a **LEFT JOIN** when you need to preserve every row from the left table regardless of matches in the right table—exactly what we did to ensure our marketing dashboards show all campaigns, not just the ones with ad groups.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

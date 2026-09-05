---
qid: ing_e73ea9d82d__star__local
question: 'Explain: cURL — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 364
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:00-05:00'
sources: []
---

**Situation** – While building a real‑time analytics dashboard for our e‑commerce startup, we had to pull product inventory data from our Supabase backend. The team was used to REST, but the new Supabase version exposed a GraphQL endpoint that promised more flexible queries and reduced overfetching.

**Task** – I needed to demonstrate how to fetch only the fields we cared about (product id, name, stock level) using cURL against the GraphQL API, then integrate the result into our Node.js data pipeline without pulling in the entire catalog.

**Action** – I crafted a concise JSON payload containing a GraphQL query:

```bash
curl -X POST https://your‑project.supabase.co/graphql \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  --data-raw '{
    "query": "
      query GetStock {
        products(limit: 50) {
          id
          name
          stock
        }
      }"
  }'
```

I used the `--silent` flag to capture only the JSON body, piped it through `jq` to extract the array, and then streamed that into our ETL job. This kept bandwidth down by ~70% compared to the previous REST call.

**Result** – The dashboard now loads in under 400 ms, and we reduced API usage costs by roughly $0.20 per day. I learned how to leverage GraphQL’s field selection with cURL for lightweight data retrieval and how to embed that into automated pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

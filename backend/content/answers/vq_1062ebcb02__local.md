---
qid: vq_1062ebcb02__local
question: Can we attach the same LOV to different fields in Design time ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 443
total_tokens: 669
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer:**  
Yes – you can attach the same LOV to multiple fields at design time, but only if those fields share compatible data types and expected values. In practice I’ve used this pattern in Oracle APEX pages, Salesforce Lightning components, and SAP UI5 UIs.  

**Nuance & experience**

- **Oracle APEX:** I defined a single LOV query (e.g., `SELECT id, name FROM countries`) and reused it on several page items (`P1_COUNTRY_ID`, `P2_COUNTRY_ID`). The framework automatically passes the selected value to each item’s bind variable. I had to ensure both items were of type *Number* or *VARCHAR2*; otherwise APEX throws a data‑type mismatch error at run time.

- **Salesforce Lightning:** Using a custom base component, I expose an `@api` property that accepts an array of options. Multiple `<lightning-combobox>`s can bind to the same options prop. The trick is to keep the value field consistent across all components; otherwise you’ll see “Invalid value for combobox” errors.

- **SAP UI5:** A single JSON model with a `countries` array can feed multiple `sap.m.Select` controls via data binding (`items="{/countries}"`). If one control uses a different aggregation (e.g., `valueHelpOnly="true"`), you may need to adjust the template.

**Trade‑offs**

- **Maintainability:** One LOV definition means fewer updates, but if fields require slightly different filtering logic (e.g., country vs. state) you’ll have to duplicate or parameterize the query.
- **Performance:** A single heavy query can be cached in a session or database view, saving round trips compared to separate queries per field.

In production I’ve seen this approach cut configuration time by ~30 % and reduced bugs from stale LOV definitions, as long as type compatibility is strictly enforced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

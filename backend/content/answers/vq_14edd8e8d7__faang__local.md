---
qid: vq_14edd8e8d7__faang__local
question: What is ObjectInspector functionality?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:53-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *ObjectInspector*—a Hadoop / Hive component that introspects complex Java objects at runtime. Confirm whether they mean Hive’s `org.apache.hadoop.hive.serde2.objectinspector` API or a generic data‑engineering tool, and ask if they want usage scenarios (e.g., serialization, schema discovery).

**Approach**  
Explain the purpose: to expose field metadata of structs, maps, lists, etc., without compile‑time knowledge. Outline its three main types—Primitive, List, Map, Struct, Union—and how each implements `ObjectInspector`. Mention that Hive uses them in SerDe and UDF layers.

**Depth**  
- **PrimitiveObjectInspector**: returns Java primitive type and value extraction (`getPrimitiveJavaObject`).  
- **StructObjectInspector**: provides field list, names, types; allows accessing nested fields by index or name.  
- **ListObjectInspector / MapObjectInspector**: expose element/entry types and methods to iterate or fetch by key.  
- **UnionObjectInspector**: handles Hive’s union type with tag/value pairs.  
Show how a UDF receives `ObjectInspector` arguments, uses them to safely extract values regardless of schema changes, enabling dynamic code.

**Edge Cases**  
- Null fields → inspectors return null safely; must check before extraction.  
- Schema evolution (added/removed columns) → Hive’s `LazyStructObjectInspector` supports forward/backward compatibility.  
- Unsupported types (e.g., custom classes) require a custom inspector or registration.

**Optimize & Communicate**  
Highlight performance: using *lazy* inspectors defers deserialization until needed, saving CPU I/O. Stress that proper inspector choice reduces serialization overhead and keeps UDFs portable across Hive versions. Conclude by noting the role of `ObjectInspectorFactory` for creating inspectors at runtime, enabling flexible data pipelines in a big‑data environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

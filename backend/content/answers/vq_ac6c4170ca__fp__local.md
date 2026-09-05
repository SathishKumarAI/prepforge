---
qid: vq_ac6c4170ca__fp__local
question: What built_in procedure is used to get IMAGES in Forms 4.5 ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 440
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:00-05:00'
sources: []
---

In Oracle Forms 4.5 the only way to **retrieve** an image that has been placed on a block or item is via the built‑in `GET_ITEM_PROPERTY`.  
The syntax is:

```plsql
l_blob := GET_ITEM_PROPERTY('item_name', IMAGE_DATA);
```

`IMAGE_DATA` is a property of an item whose type is *Image* (or *Graphic*).  
When you call `GET_ITEM_PROPERTY`, Forms returns the binary representation of the image as a BLOB. This is what the form engine uses internally to render the picture, so it’s the same format you would store in a database column of type BLOB or RAW.

**Why this works:**  
Oracle Forms stores images in memory as a stream of bytes. The `GET_ITEM_PROPERTY` built‑in simply exposes that byte stream, allowing PL/SQL code (or external applications via RPC) to manipulate it—e.g., copy it to a database column, send it over the network, or convert it to another format.

**Non‑obvious insight:**  
You can *also* use `SET_ITEM_PROPERTY` with `IMAGE_DATA` to **replace** an image at runtime. Because both GET and SET work on the same property, you can implement dynamic image swapping (e.g., changing a logo based on user role) without reloading the form or recreating items. This duality is often overlooked but makes Forms powerful for UI personalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

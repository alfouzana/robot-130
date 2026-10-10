import "./style.css";
import { groups, steps } from "./parts.js";

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));

const usd = (n) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 2 });

// parts list
let grand = 0;
const partsEl = document.querySelector("[data-parts]");
partsEl.innerHTML = groups
  .map((g) => {
    const sub = g.items.reduce((s, i) => s + i.qty * i.price, 0);
    grand += sub;
    const rows = g.items
      .map(
        (i) => `
        <tr class="border-t border-slate-100">
          <td class="py-3 pe-3"><div class="font-semibold">${i.name}</div><div class="text-sm text-slate-500">${i.role}</div></td>
          <td class="py-3 text-center">${i.qty}</td>
          <td class="py-3 text-center whitespace-nowrap" dir="ltr">${usd(i.price)}</td>
          <td class="py-3 text-center font-semibold whitespace-nowrap" dir="ltr">${usd(i.qty * i.price)}</td>
          <td class="py-3 text-center"><a href="${i.link}" target="_blank" rel="noopener" class="text-brand hover:underline whitespace-nowrap">شراء ↗</a></td>
        </tr>`
      )
      .join("");
    return `
      <div class="rounded-2xl bg-white p-5 shadow-sm md:p-7">
        <div class="mb-3 flex items-center justify-between">
          <h3 class="text-xl font-bold">${g.icon} ${g.title}</h3>
          <span class="rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand" dir="ltr">${usd(sub)}</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[560px] text-right">
            <thead class="text-xs text-slate-500"><tr>
              <th class="pb-2 font-medium">القطعة</th><th class="pb-2 text-center font-medium">العدد</th>
              <th class="pb-2 text-center font-medium">سعر الحبة</th><th class="pb-2 text-center font-medium">المجموع</th><th></th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  })
  .join("");

const misc = Math.round(grand * 0.1);
document.querySelector("[data-subtotal]").textContent = usd(grand);
document.querySelector("[data-misc]").textContent = usd(misc);
document.querySelectorAll("[data-total]").forEach((el) => (el.textContent = usd(grand + misc)));
document.querySelector("[data-total-sar]").textContent = Math.round((grand + misc) * 3.75).toLocaleString("en-US") + " ريال";

// steps
document.querySelector("[data-steps]").innerHTML = steps
  .map(
    (s, i) => `
    <div class="flex gap-5">
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">${i + 1}</div>
      <div><h3 class="text-lg font-bold">${s.t}</h3><p class="mt-1 leading-8 text-slate-600">${s.d}</p></div>
    </div>`
  )
  .join("");

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

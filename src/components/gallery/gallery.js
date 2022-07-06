import { Image } from "./image";

export function Gallery() {
  return (
    <section className="bg-slate-400 rounded-2xl p-5 max-w-[400px] mt-8">
      <h1>Amazing scientists</h1>
      <div className="flex justify-start gap-8 mt-2">
      <Image />
      <Image />
      <Image />
      </div>
    </section>
  );
}

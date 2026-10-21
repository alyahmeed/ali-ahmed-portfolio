import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { videoSlots } from '../../data/portfolio'

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 translate-x-[-1px] fill-current"
    >
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  )
}

export default function VideoSection() {
  return (
    <section id="video" className="shell py-24 md:py-36">
      <SectionHeading number="02" eyebrow="Video & Editing" title="الفيديو والمونتاج" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {videoSlots.map((slot, index) => (
          <Reveal
            key={index}
            as="button"
            type="button"
            disabled
            delay={index * 90}
            className={`group relative overflow-hidden rounded-md border border-border bg-card text-start ${slot.aspect} cursor-default`}
          >
            <div className="card-veil absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex size-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-primary animate-float-ring" />
                <span className="absolute inset-0 rounded-full border border-primary animate-float-ring [animation-delay:1.2s]" />
                <span className="relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <PlayIcon />
                </span>
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-primary">{slot.kind}</p>
                <h3 className="mt-1 text-base font-bold md:text-lg">{slot.title}</h3>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                قريباً
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

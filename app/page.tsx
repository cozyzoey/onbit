"use client";

import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

import { HOME_MENU, HOME_WELCOME } from "@/constants/fixtures";

const bgUrlClass =
  'bg-[url("https://res.cloudinary.com/dftuawd1d/image/upload/v1701055748/onbit/sunset_port_djzmxz.jpg")] landscape:bg-[url("https://res.cloudinary.com/dftuawd1d/image/upload/v1701055748/onbit/sunset_land_gm3trk.jpg")]';

const opacityVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const descVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delay: 1,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const descChildVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <div className="-mt-16 text-white xl:-mt-20">
      {HOME_WELCOME.map(({ title, desc }, idx) => {
        return (
          <section
            key={idx}
            className={clsx(
              bgUrlClass,
              "flex h-[78vh] min-h-max w-full items-end bg-cover bg-fixed bg-center px-4",
            )}
          >
            <motion.div
              className="mx-auto w-full max-w-lg py-16 md:py-20 xl:max-w-screen-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: "all" }}
              variants={opacityVariants}
            >
              <div
                className={clsx(
                  "mb-16 w-max font-mono text-7xl font-bold opacity-50 md:text-8xl xl:text-9xl",
                  idx % 2 === 0 ? "" : "md:ml-auto",
                )}
              >
                {title}
              </div>
              <motion.div
                className={clsx(
                  "w-max font-semibold leading-8 md:text-lg",
                  idx % 2 === 0 ? "md:ml-auto" : "",
                )}
                variants={descVariants}
              >
                {desc.map((p, idx) => (
                  <motion.p variants={descChildVariants} key={idx}>
                    {p}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </section>
        );
      })}

      <div
        className={clsx(
          bgUrlClass,
          "flex h-80 w-full items-end justify-center bg-cover bg-fixed bg-center",
        )}
      >
        <motion.div
          variants={opacityVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "all" }}
          className="flex gap-x-4 py-16 text-lg font-medium md:gap-x-10"
        >
          {HOME_MENU.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-primary-800"
            >
              {title}
              <HiChevronRight
                size={24}
                className="float-right mb-1 text-primary-800"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

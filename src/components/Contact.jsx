import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", msg: "Please fill in all fields." });
      return;
    }
    if (!WEB3FORMS_KEY) {
      setStatus({
        state: "error",
        msg: "Email service not configured. Please email me directly.",
      });
      return;
    }
    setStatus({ state: "loading", msg: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ state: "success", msg: "Thanks for your message, I will get back to you soon :)" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          state: "error",
          msg: data.message || "Something went wrong. Please try emailing me directly.",
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Network error. Please try emailing me directly.",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-500">/ 06</p>
        <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Hiring, collaborating or just saying hi — drop a message and I&apos;ll get back within a day.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Info column */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-600 p-8 text-white shadow-xl">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <h3 className="font-display text-2xl font-bold">Let&apos;s create something extraordinary</h3>
            <p className="mt-2 text-sm text-white/80">
              Open to full-time, contract and consulting opportunities.
            </p>

            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <FaMapMarkerAlt />
                </span>
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FaPhone />
                </span>
                <div className="flex flex-col gap-0.5">
                  {CONTACT.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:underline">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <FaEnvelope />
                </span>
                <a href={`mailto:${CONTACT.email}`} className="break-all hover:underline">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.12 },
            },
          }}
          onSubmit={onSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3"
        >
          <div className="space-y-5">
            {[
              { name: 'name', type: 'text', label: 'Your name', placeholder: 'Jane Recruiter' },
              { name: 'email', type: 'email', label: 'Email', placeholder: 'jane@company.com' },
            ].map((f) => (
              <motion.div
                key={f.name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -2 }}
              >
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={onChange}
                  placeholder={f.placeholder}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-indigo-400 focus:bg-white focus:shadow-[0_10px_30px_-12px_rgba(99,102,241,0.45)] focus:ring-4 focus:ring-indigo-100"
                />
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -2 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                placeholder="Tell me about the role or project..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-indigo-400 focus:bg-white focus:shadow-[0_10px_30px_-12px_rgba(99,102,241,0.45)] focus:ring-4 focus:ring-indigo-100"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status.state === "loading"}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-[length:200%_200%] px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-500 hover:bg-[position:100%_50%] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
            >
              {status.state === "loading" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Send message
                </>
              )}
            </motion.button>

            {status.state === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
              >
                <FaCheckCircle /> {status.msg}
              </motion.div>
            )}
            {status.state === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700"
              >
                <FaExclamationCircle /> {status.msg}
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>

    </section>
  );
};

export default Contact;

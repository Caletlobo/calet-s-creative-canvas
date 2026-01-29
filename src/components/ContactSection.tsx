import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        {/* Section Header */}
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear from you!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-secondary-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="p-3 rounded-lg gradient-hero">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground">Email</p>
                  <p className="font-medium">hello@caletlobo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="p-3 rounded-lg gradient-hero">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className="form-input resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

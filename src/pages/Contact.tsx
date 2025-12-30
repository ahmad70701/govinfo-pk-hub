import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent ✅",
        description: "Thank you for contacting us. We will respond within 24–48 hours.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error ❌",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact GovInfo PK – Questions, feedback, or suggestions about Pakistani government schemes and services."
      />

      <section className="section-spacing">
        <div className="container-gov max-w-4xl">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FORM */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="card-gov p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-3 border border-border rounded-lg bg-background resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="space-y-6">
              <div className="card-gov p-6">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  info@pakgovinfo.site
                </p>
              </div>

              <div className="card-gov p-6">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

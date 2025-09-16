import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Send me a message.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <ContactForm />
        </div>
      </div>
    </section>
  );
}

import { EMAIL_ADDRESS } from "../../data/consts";

export default function FAQs({ faqs, type }) {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              marginTop: "3rem",
              textTransform: "uppercase",
              fontSize: "1.125rem", // lg:text-lg
              fontFamily: '"Open Sans Variable", sans-serif',
              fontWeight: "700",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#ffca48", // text-accent-300
              maxWidth: "768px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {type}
          </p>

          <h2
            style={{
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
              fontSize: "2.25rem", // text-4xl
              lineHeight: "2.5rem",
              fontFamily: '"Kanit", sans-serif',
              fontWeight: "700",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#055587", // text-primary-700
              maxWidth: "768px",
              marginLeft: "auto",
              marginRight: "auto",
              textTransform: "uppercase",
            }}
          >
            Frequently Asked Questions
          </h2>

          <dl
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {faqs.map((faq, index) => (
              <details
                key={index}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "none",
                  width: "40%",
                  background: "#dcdcdc", // bg-muted-200
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: "600",
                    color: "#464646", // text-muted-700
                    listStyle: "none",
                  }}
                >
                  {faq.title}
                </summary>
                <div
                  style={{
                    marginTop: "0.5rem",
                    color: "#656565",
                    width: "100%",
                  }} // text-muted-600
                  dangerouslySetInnerHTML={{ __html: faq.content }}
                />
              </details>
            ))}
          </dl>
        </div>

        <a
          href="/contact"
          style={{
            color: "#ffffff",
            background: "#0067a9", // text-primary-700
            padding: "0.75rem 1.5rem",
            borderRadius: "0.375rem",
            fontWeight: "600",
            display: "inline-block",
            marginTop: "3rem",
            textAlign: "center",
            maxWidth: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

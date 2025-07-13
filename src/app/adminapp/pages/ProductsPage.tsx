import { MdOutlineAdd } from "react-icons/md";
import RoundButton from "../components/RoundButton";
import "./ProductsPage.css";
import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";

const ProductsPage = () => {
  const [mode, setMode] = useState<"view" | "add" | "edit">("view");
  return (
    <main className="products-page">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          height: "5rem",
        }}
      >
        <h1>Products</h1>
        {mode == "view" && (
          <section>
            <RoundButton
              title={"New"}
              type="primary"
              func={() => setMode("add")}
            >
              <MdOutlineAdd size={"2rem"} />
            </RoundButton>
          </section>
        )}
        {(mode == "add" || mode == "edit") && (
          <section
            style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          >
            <PrimaryBtn
              title={"Cancel"}
              type="outline"
              func={() => {
                setMode("view");
              }}
            />
            <PrimaryBtn title={"Save As Draft"} type="info" func={() => {}} />
            <PrimaryBtn title={"Publish"} type="success" func={() => {}} />
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;

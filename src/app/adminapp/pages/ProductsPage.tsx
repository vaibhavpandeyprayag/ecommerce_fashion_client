import { MdOutlineAdd } from "react-icons/md";
import RoundButton from "../components/RoundButton";
import "./ProductsPage.css";
import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import PrimaryInput from "../components/PrimaryInput";
import Select from "react-select/base";

const ProductsPage = () => {
  const [mode, setMode] = useState<"view" | "add" | "edit">("view");
  const [productName, setProductName] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [subcategoryId, setSubcategoryId] = useState<number | null>(null);
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
        <h1 className="page-title">Products</h1>
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
          </section>
        )}
      </div>
      {mode == "add" && (
        <div className="new-product-form">
          <div style={{ display: "flex", gap: "1rem", justifyContent: "end" }}>
            <PrimaryBtn title={"Save As Draft"} type="info" func={() => {}} />
            <PrimaryBtn title={"Publish"} type="success" func={() => {}} />
          </div>
          <div>
            <label className="field-label">Product Name</label>
            <PrimaryInput
              value={productName}
              onInput={e => setProductName(e.currentTarget.value)}
            />
          </div>
          <div className="two-column-group">
            <div>
              <label className="field-label">Category</label>
              <Select
                name="category"
                classNamePrefix={"single-select"}
                isClearable={true}
                isSearchable={true}
                value={categoryId}
                onChange={(category_id: any) => setCategoryId(category_id)}
                inputValue={""}
                onInputChange={() => {}}
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
              />
            </div>
            <div>
              <label className="field-label">Sub Category</label>
              <Select
                name="category"
                classNamePrefix={"single-select"}
                isClearable={true}
                isSearchable={true}
                value={categoryId}
                onChange={(category_id: any) => setCategoryId(category_id)}
                inputValue={""}
                onInputChange={() => {}}
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductsPage;

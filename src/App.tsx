import Accordion from "./components/Accordion";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <h1>Bài tập React Design Pattern</h1>

      <h2>1. Compound Component Accordion</h2>

      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Header panelId="1">
            React là gì?
          </Accordion.Header>

          <Accordion.Panel panelId="1">
            React là thư viện JavaScript dùng để xây dựng giao diện.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item id="2">
          <Accordion.Header panelId="2">
            Context API là gì?
          </Accordion.Header>

          <Accordion.Panel panelId="2">
            Context API giúp chia sẻ state giữa các component.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item id="3">
          <Accordion.Header panelId="3">
            TypeScript là gì?
          </Accordion.Header>

          <Accordion.Panel panelId="3">
            TypeScript bổ sung hệ thống kiểu cho JavaScript.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <hr />

      <h2>2. usePagination</h2>

      <ProductList />
    </div>
  );
}

export default App;
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AccordionContextType {
  activePanel: string | null;
  setActivePanel: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);


interface AccordionProps {
  children: ReactNode;
}

function Accordion({ children }: AccordionProps) {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <AccordionContext.Provider
      value={{
        activePanel,
        setActivePanel,
      }}
    >
      <div className="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}


function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion components must be used inside <Accordion>"
    );
  }

  return context;
}

interface AccordionItemProps {
  id: string;
  children: ReactNode;
}

function Item({ id, children }: AccordionItemProps) {
  return (
    <div className="accordion-item">
      {children}
    </div>
  );
}


interface HeaderProps {
  panelId: string;
  children: ReactNode;
}

function Header({ panelId, children }: HeaderProps) {
  const { activePanel, setActivePanel } = useAccordionContext();

  const isActive = activePanel === panelId;

  const handleClick = () => {
    setActivePanel(panelId);
  };

  return (
    <button
      onClick={handleClick}
      className={`accordion-header ${
        isActive ? "active" : ""
      }`}
    >
      {children}

      <span>{isActive ? "▲" : "▼"}</span>
    </button>
  );
}


interface PanelProps {
  panelId: string;
  children: ReactNode;
}

function Panel({ panelId, children }: PanelProps) {
  const { activePanel } = useAccordionContext();

  if (activePanel !== panelId) {
    return null;
  }

  return (
    <div className="accordion-panel">
      {children}
    </div>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

export default Accordion;

import React,{useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from"react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
    MdOutlineArrowDropDown,
    MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from"../../ultils/accordion.jsx";
import "./Value.css";

function Value() {
  return (
    <section className="v-wrapper" id="Value">
        <div className="v-container">
            <div className="v-left">
                <div className="image-container">
                    <img className="rub" src="./value.png" alt="value" />
                </div>
            </div>

            <div className="v-right">
                <span className="orangeText">Our value</span>
                <span className="primaryText">Value We Give to you</span>
                <span className="secondaryText"> We always ready to help by providijng the best services for you. <br/>We beleive a good blace to live can make your life better</span>

                <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                 {data.map((item, i) => {
                    const [className, setClassName] = useState(null);
                    return(
                       <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                         <AccordionItemHeading>
                           <AccordionItemButton className=" accordionButton">
                              <AccordionItemState>
                                {( {expanded} )=>
                                 expanded
                                   ? setClassName("expanded")
                                   : setClassName("collapsed")
                                }
                                </AccordionItemState>
                                <div className=" icon">{item.icon}</div>
                                <span className="primaryText"> 
                                   {item.heading}
                                </span>
                                <div className=" icon">
                                    <MdOutlineArrowDropDown size={20}/>
                                </div>
                             
                           </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>
                       </AccordionItem>
                    );
                 })}
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value

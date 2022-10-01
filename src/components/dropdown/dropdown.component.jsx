import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import {DropdownContainer, ContentContainer, FilterSelect} from './dropdown.styles'
 const options = [
    'Default' , 'Price: High to Low', 'Price: Low to High'
 ]
const Dropdown = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const [isSelectOption, setIsSelectOption] = useState(null)
    const dorpdownOpen = ()=>{
        setIsOpen(!isOpen)
     }
     const onOptionClicked= value =>()=>{
        setIsSelectOption(value)
        setIsOpen(!isOpen)
        
     }


    return(
        <div>
            <DropdownContainer>
                <FilterSelect onClick={dorpdownOpen}>
                    <div>
                    {
                        isSelectOption || "Default"
                    }
                    </div>
                    <div>

                    <BsChevronDown />
                    </div>
                </FilterSelect>
                <div>
                {
                    isOpen &&(
                    
                    <ContentContainer>
                        {
                            options.map(option=>(
                                <span onClick={onOptionClicked(option)}>{option}</span>
                                ))
                        }

                </ContentContainer>
                )
                }
                </div>
            </DropdownContainer>
            {/* <Select>
                <Option >
                    default
                </Option>
                <Option >
                    low to height price
                </Option>
                <Option>
                    height to low price
                </Option>
            </Select> */}
        </div>
    )
}


export default Dropdown
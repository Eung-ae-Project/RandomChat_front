import styled from "@emotion/styled";

export const Box = styled.div`
	
		background: #A4D3FF;
		border: 1px solid ;
		height: 140px;
        
		border-radius: 20px;
    color: white;
		& h3{
				font-size: 28px;
				
		}
		& span{
				font-size: 15px;
		}
		& .title{
				display: flex;
				justify-content: center;
		}
		& .sub{
				font-weight: 550;
				margin: 15px;
				display: flex;
				justify-content: space-between;
		}
`;
export const SlickContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    flex-grow: 1;
    z-index: 1;
    
    
    
`;
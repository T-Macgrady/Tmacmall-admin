import React        from 'react';

import Util         from 'util/mm.jsx';
import Product      from 'service/product-service.jsx';

import                   './index.scss';
const _mm           = new Util();
const _product      = new Product();  

class ListSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchType      : 'productId',
            searchKeyword   : '',
        }
    }
    // 数据变化的时候
    onValueChange(e){
        let value = e.target.value,
            name  = e.target.name;
        this.setState({
            [name] : value
        });
    }
    // 点击搜索按钮的时候
    onSearch(){
        this.props.onSearch(this.state.searchType, this.state.searchKeyword);
    }
    // 输入关键字后按回车，自动提交
    onSearchKeywordKeyUp(e){
        if(e.keyCode === 13){
            this.onSearch(); 
        }
    }
    render(){
        return(
            <div className="form-group form-inline">
                <select name="searchType" className="form-control" 
                    onChange={e => this.onValueChange(e)} >
                    <option value="productId" >按商品ID查询</option>
                    <option value="productName" >按商品名称查询</option>
                </select>
                <input type="text" name="searchKeyword" placeholder="关键词" className="form-control" 
                    onChange={e => this.onValueChange(e)} 
                    onKeyUp={e => this.onSearchKeywordKeyUp(e)}/>
                <div className="btn btn-default" onClick={e => this.onSearch()}>查询</div>
            </div>
        )
    }
}

export default ListSearch;
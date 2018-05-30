import React               from 'react';

import PageTitle           from 'component/page-title/index.jsx';
import CategorySelector    from './category-selector.jsx';

import Util                from 'util/mm.jsx';
import Product             from 'service/product-service.jsx';

import                      './save.scss';

const _mm           = new Util();
const _product      = new Product();  

class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryId          : 0,
            parentCategoryId    : 0,
            id                  : this.props.match.params.pid,
            name                : '',
            subtitle            : '',
            subImages           : [],
            price               : '',
            stock               : '',
            detail              : '',
            status              : 1 //商品状态1为在售           
        }
    }
    // 加载商品详情
    componentDidMount(){
        _product.getdetail(this.state.id).then(res =>{
            res.subImages = this.getsubImage(res);
            this.setState(res);
        },errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    getsubImage(res){
        return res.subImages.split(',');
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="商品管理 -- 商品详情">
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">商品名称</label>
                                </div>
                                <div className="col-md-5">
                                    <p className="form-control-static">{this.state.name}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">商品描述</label>
                                </div>
                                <div className="col-md-5">
                                    <p type="text" name="subtitle" className="form-control-static">{this.state.name}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">当前状态</label>
                                </div>
                                <div className="col-md-5">
                                    <p type="text" className="form-control-static">在售</p>
                                </div>
                            </div>
                            <CategorySelector 
                            readOnly
                            categoryId={this.state.categoryId} 
                            parentCategoryId={this.state.parentCategoryId} />
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">商品价格</label>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input value={this.state.price} type="number" name="price" 
                                        className="form-control" readOnly/>
                                        <span className="input-group-addon">元</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">商品库存</label>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <input value={this.state.stock} type="number" name="stock" 
                                        className="form-control" readOnly/>
                                        <span className="input-group-addon">件</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">商品图片</label>
                            </div>
                                <div className="col-md-10">
                                    {
                                        this.state.subImages.length ? this.state.subImages.map(
                                            (subImage, index) => (
                                            <div className="img-con" key={index}>
                                                <img className="img" src={`${this.state.imageHost}${subImage}`} />
                                            </div>)
                                        ) : (<div >暂无图片</div>)
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2">
                                    <label className="control-label">商品详情</label>
                                </div>
                                <div className="col-md-10">
                                    <div className="textarea" dangerouslySetInnerHTML={{__html: this.state.detail}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductDetail;
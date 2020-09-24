export default {
    props:{
        to:{
            type:String,
            required:true,
        },
        tag:{
            type:String,
            default:'a'
        }
    },
    methods:{
        handleClick(){
            location.hash=this.to;
        }
    },
    render(h){
        let data={};
        if(this.tag==='a'){
            data.attrs={ href: '#' + this.to};
        }else{
            data.on={ click:this.handleClick}
        }
        return h(this.tag,data,this.$slots.default);
    }
}
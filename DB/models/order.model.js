//import { Object, String } from "joi";
import { Schema , model , mongoose, Types} from "mongoose";

const orderSchema = new Schema (
    {
        userId:{
            type: Types.ObjectId,
            required:true,
            ref:'User',
        },
        products:[{

        }],
        couponName:{
            type:Name,
        },
        finalPrice:{
            type:Number,
            required:true,
        },
        paymentType:{
            type:String,
            default:'cash',
            enum:['cash','card'],
        },
        status:{
            type:String,
            default:'pending',
            enum:['pending'],
        }
     
    },
    {
        timestamps: true,
    }
);

const orderModel = mongoose.model.Order || model('Order',orderSchema);
export default orderModel; 
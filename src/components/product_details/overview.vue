<template>
    <!-- Product Details -->
    <v-container class="pt-0 " fluid>
        <v-container fluid>
            <v-row>
                <!-- Details -->
                <v-col cols="7" >
                    
                    <!-- Primary Details -->
                    <p class="text-subtitle-1 font-weight-bold pt-2 pb-5">Primary Details</p>
                    <v-row>
                        <v-col cols="8">
                            <!-- name -->
                            <v-row >
                            <v-col cols="4">Name:</v-col>
                            <v-col cols="8">{{product.name}}</v-col>
                            </v-row>

                            <!-- category -->
                            <v-row>
                            <v-col cols="4">Category:</v-col>
                            <v-col cols="8">{{product.category}}</v-col>
                            </v-row>

                            <!-- type -->
                            <v-row>
                            <v-col cols="4">Type:</v-col>
                            <v-col cols="8">{{product.type}}</v-col>
                            </v-row>

                            <!-- threshold -->
                            <v-row>
                            <v-col cols="4">Threshold Value:</v-col>
                            <v-col cols="8">{{product.threshold}} units</v-col>
                            </v-row>

                            <!-- size -->
                            <v-row>
                            <v-col cols="4">Size:</v-col>
                            <v-col cols="8">{{product.size}} mm</v-col>
                            </v-row>

                            <!-- updated -->
                            <v-row>
                            <v-col cols="4">Last Update:</v-col>
                            <v-col cols="8">{{convertDateTime(product.updated_at)}}</v-col>
                            </v-row>
                        </v-col>
                        
                        <v-col cols="4" class="align-self-center">
                            <v-img
                                :src="product.imageURL"
                                :width="200"
                                aspect-ratio="1/1"
                                cover
                            ></v-img>
                        </v-col>
                    </v-row>


                    <!-- Supplier Details -->
                    <p class="text-subtitle-1 font-weight-bold pt-10 pb-5">Supplier Details</p>
                    <v-row>
                        <v-col cols="8">
                            <!-- supplier name -->
                            <v-row>
                                <v-col cols="4">Supplier Name:</v-col>
                                <v-col cols="8" v-if="product && product.supplier_id">{{product.supplier_id.name}}</v-col>
                            </v-row>

                            <!-- supplier contact -->
                            <v-row>
                                <v-col cols="4">Contact Number:</v-col>
                                <v-col cols="8" v-if="product && product.supplier_id">{{product.supplier_id.contact}}</v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <!-- Stock Distribution -->
                    <p class="text-subtitle-1 font-weight-bold pt-10 pb-5">Stock Distribution</p>
                    <v-row>
                        <v-col cols="12">
                            <!-- header -->
                            <v-row class="bg-quinary rounded">
                                <v-col cols="8">Store Name</v-col>
                                <v-col cols="4">Stock in Hand</v-col>
                            </v-row>

                            <!-- stores -->
                            <v-row v-for="item in data" :key="item._id">
                                <v-col cols="8">{{ item.storeName }}</v-col>
                                <v-col cols="4">
                                    <v-chip v-if="item.count < product.threshold" close class="ml-2" color="error">
                                    {{ item.count }} UNITS
                                    </v-chip>
                                    <v-chip v-else-if="item.count >= (product.threshold*2)" close class="ml-2" color="success">
                                    {{ item.count }} UNITS
                                    </v-chip>
                                    <v-chip v-else-if="item.count >= product.threshold" close class="ml-2" color="warning">
                                    {{ item.count }} UNITS
                                    </v-chip>
                                </v-col>
                            </v-row> 

                        </v-col>

                    </v-row>

                </v-col>

                <!-- Demand -->
                <!-- <v-col cols="5" class="pl-10"> -->

                    <!-- Stock Demand Prediction -->
                        <!-- <v-row>
                            <v-col cols="1" class="align-self-center">
                                <v-icon class="fa-regular fa-wand-magic-sparkles"></v-icon>
                            </v-col>
                            <v-col>
                                <v-tooltip text="A Tip For You <3" location="top">
                                <template v-slot:activator="{ props }">
                                    <p class="text-subtitle-1 font-weight-bold pt-2" v-bind="props">Stock Demand Prediction ⓘ</p>
                                </template>
                                </v-tooltip>
                                <p class="text-caption pa-0 ma-0" >As of {{ Date.now() }}</p>
                            </v-col>
                        </v-row>
                        <v-row >
                            <v-col cols="12" >
                            <v-img
                                :src="graph"
                                :width="500"
                                aspect-ratio="1/1"
                                cover
                            ></v-img>
                            </v-col>
                        </v-row> -->

                    <!-- complaint -->
                        <!-- <v-row class="pt-10"> 
                            <v-col cols="1" class="align-self-center">
                                <v-icon class="fa-regular fa-chart-simple"></v-icon>
                            </v-col>
                            <v-col>
                                <v-tooltip text="Another Tip For You <3" location="top">
                                <template v-slot:activator="{ props }">
                                    <p class="text-subtitle-1 font-weight-bold pt-2" v-bind="props">{{ product.name }} ⓘ</p>
                                </template>
                                </v-tooltip>
                                <p class="text-caption pa-0 ma-0" >Total Complaint Program</p>
                            </v-col>
                            <v-col cols="5" class="align-self-center">
                                <v-btn color="secondary" prepend-icon="fa-solid fa-arrow-up-right-from-square">Complaint</v-btn>
                            </v-col>
                        </v-row>
                        <v-row >
                            <v-col cols="12" >
                            <v-img
                                :src="chart"
                                :width="500"
                                aspect-ratio="1/1"
                                cover
                            ></v-img>
                            </v-col>
                        </v-row> -->
                    
                <!-- </v-col> -->
                
            </v-row>
        </v-container>
    </v-container>
  
</template>
  
  <script>
  import graph from "@/assets/demo_graph.png"
  import chart from "@/assets/demo_chart.png"
    import { convertDateTime } from "@/tools/convertDateTime"
import { meterCountByStore } from "@/tools/api"
  export default {
    name: "detailOverview",
    props: {
      product: Array,
    },
    data(){
        return{
            graph,
            chart,
            data: null
        }
    },
    watch:{
        product(newVal){
        this.loadStock(newVal._id)
    }
    },
    methods:{
        convertDateTime,
        async loadStock(id){
            console.log(id);
            await meterCountByStore(id)
            .then((response)=>{this.data = response})
        }
    }
  }
  </script>
<!-- [{_id: "661cc37794ca5d23f622b722", storeName: "Gombak Store", count: 19}, {_id: "662207ff41bc144aa4140b82", storeName: "Pengurusan Air Selangor Wilayah Kuala Lumpur (HQ)", count: 1}] -->
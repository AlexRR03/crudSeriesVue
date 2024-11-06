import Global from "@/Global";
import axios from "axios";
export default class ServiceSeries{

    getSeries(){
        return new Promise(function(resolve){
            let series = []
            let request = "api/series"
            let url = Global.urlApiSeries+request
            axios.get(url).then(response=>{
                // console.log(response.data)
                series= response.data
                resolve(series)
            })
        })
    }
    getSeriesById(id){
        return new Promise(function(resolve){
            let serie ={} 
            let request = "api/series/"+id
            let url = Global.urlApiSeries+request
            axios.get(url).then(response=>{
                // console.log(response.data)
                serie= response.data
                resolve(serie)
            })
        })
    }

    getPersonajesByIdSerie(idSerie){
        return new Promise(function(resolve){
            let personajes = [] 
            let request = "api/Series/PersonajesSerie/"+idSerie
            let url = Global.urlApiSeries+request
            axios.get(url).then(response=>{
                // console.log(response.data)
                personajes= response.data
                resolve(personajes)
            })
        })
    }
}
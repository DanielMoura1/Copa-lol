import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Diaum() {
    const [jogo1j1,setJogo1j1] =useState('logo192.png')
    const [jogo1j2,setJogo1j2] =useState('logo192.png')
    const [jogo2j1,setJogo2j1] =useState('logo192.png')
    const [jogo2j2,setJogo2j2] =useState('logo192.png')
    const [jogo3j1,setJogo3j1] =useState('logo192.png')
    const [jogo3j2,setJogo3j2] =useState('logo192.png')
    const [jogo4j1,setJogo4j1] =useState('logo192.png')
    const [jogo4j2,setJogo4j2] =useState('logo192.png')
    const [time1,setTime1] =useState(true)
    const [time2,setTime2] =useState(true)
    const [time3,setTime3] =useState(true)
    const [time4,setTime4] =useState(true)
    const [time5,setTime5] =useState(true)
    const [time6,setTime6] =useState(true)
    const [time7,setTime7] =useState(true)
    const [time8,setTime8] =useState(true)
    function toggleDiv(set,time) {
        if(time ===true){
            set(false)
            
        }else{
            set(true)
        }
        
    }
    function colocar (set,time){
        set(time)

    }
    
    return(
        <div className='body'>
            <div className='jogos'>
                <div className='partida' >
                    <img onClick={()=>toggleDiv(setTime1,time1)} className='img' src={jogo1j1}></img> vs <img  onClick={ ()=>toggleDiv(setTime1,time1)}  className='img' src={jogo1j2}></img>
                    <div  className={time1 ? 'none': 'escolhaT'}>
                        <button onClick={()=>colocar(setJogo1j1,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                        <button onClick={()=>colocar(setJogo1j1,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                    <div  className={time1 ? 'none': 'escolhaT'}>
                    <button onClick={()=>colocar(setJogo1j2,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                    <button onClick={()=>colocar(setJogo1j2,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                </div>
                <div className='partida' >
                    <img onClick={()=>toggleDiv(setTime3,time3)} className='img' src={jogo2j1}></img> vs <img  onClick={ ()=>toggleDiv(setTime3,time3)}  className='img' src={jogo2j2}></img>
                    <div  className={time3 ? 'none': 'escolhaT'}>
                        <button onClick={()=>colocar(setJogo2j1,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                        <button onClick={()=>colocar(setJogo2j1,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                    <div  className={time3 ? 'none': 'escolhaT'}>
                    <button onClick={()=>colocar(setJogo2j2,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                    <button onClick={()=>colocar(setJogo2j2,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                </div>
                <div className='partida' >
                    <img onClick={()=>toggleDiv(setTime5,time5)} className='img' src={jogo3j1}></img> vs <img  onClick={ ()=>toggleDiv(setTime5,time5)}  className='img' src={jogo3j2}></img>
                    <div  className={time5 ? 'none': 'escolhaT'}>
                        <button onClick={()=>colocar(setJogo3j1,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                        <button onClick={()=>colocar(setJogo3j1,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                    <div  className={time5 ? 'none': 'escolhaT'}>
                    <button onClick={()=>colocar(setJogo3j2,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                    <button onClick={()=>colocar(setJogo3j2,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=arTJClPIM2w" target="_blank">
                    <div className='partida' >
                        <img onClick={()=>toggleDiv(setTime7,time7)} className='img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0ATcDASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAECBQMEBgf/xAA3EAACAgIBAgQEBQIFBAMAAAAAAQIDBBEFEiEGMUFRE2FxgRQiI5GhMrEHQnLB0RUWUuGCovD/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIEBQMG/8QALhEBAAEDAgQFAgYDAAAAAAAAAAECAxEEIRIxQXEFUWGB8BOhBhQiMkLBkdHh/9oADAMBAAIRAxEAPwD5EAAHmAAKQACsAACkKA0vuQo8wJ21oLtv5jQChSAIoAAjXsCkCoC7ARAUACFAEAAAvn5gBQABEBSAAAAAAAAAAAAAAFIXsQAVehCgUaMSgUAdwuEYAAaBQQwJhkBQb2AAgAAABVoCAy7aZAMSouvUjCqvcBa18wBAAECFIAAAAAAAAAAAAAAAAAAAAAAUbfoARkr0/L7kKAoQpAKQpdFYsUH5syMQAXoPQIAUn/JQKCLzKETuHrZSfMKgD7fVIgFAAQAIAAAAAAAAAAAAAAAAALoACdwUAAQq7kZQvmEjLplryHl2IzxMJ0k0ckdN6YlBrutNfyvqhllwZjMMAF7F0yvKYT3DjJen7d/7F0u3uPoVNmAM5NNJ6/MvP2a9zHRFmEMtGJyQTl2/n0GViJlil3LryORwil5/f3fyMO3d7X0JllNGNmJH28vuZam1pLt8v9zBrRcsZjCAArAAAAAAAAAAAAAAAAAAKBCkKAKRFAaRGV9vr/YxChVsIsQQ5Y/EjFT6X0PcVJxfRv6+Ryxqdj046lL+h9umT9vqc/H5N1M/gRr+NVc+9T1vev8ALvsbKNHCZElGUp4dza/LL9Fp+n5Z7galy9NE7xt5w+g0mgp1FqK7dyM9aZ2/xM7T9mhlCUdppppvzWmmvRmW24xn89Pfk9G+z+FzKpYtsL68mPI5Sx+qyKpULrX+WU5JuGn3779DiyPD3P4WPkLJ4rMX54yhZRBZFSSTUuqdDkl6GNOqtVxExVG7Vu6aqxXVRXtj5Hpu0Pbfby3s5IJNuLaX1fn8iRg5yjXBN2Tkq4xXn1N68j2edx3h3GsxMbGWHZKjCxYZlzshNXZko9dri5PyTfT/APE9bt2LcZln4b4dXrrnDTMR6zyeKain5p/cml7r7M9l/wBMwkot4VKUoqUeqlJSi/KUdruvZkeDxkXqWPhKS84yVSkvqm9nhTraJ5RLtT+Er0bzdp+7xz177Zn0fl2l99G35yrEx4Y1NePVXZNytk4QSl0L8qW16Pv+xhxXF8vy/VRxmBbkySatuaUcehJb6rLp6gvvI2Yr46YqiHB1Oh/KairT11RM0+TVOGopv1/czqXxNQivm9ebPUZ3F8JwnH5TsylyXLzUalbjNrj8JyepKqTW7J62t6SW/VrZpOIqds7668fKyLnVNVwxaJ3SU+lqLagjGa44ZmOixppt3KKbv6eLffy/70a97lJvXl2S9DONMulTknptqCXnNrz18jc5XA85g4yyMnB+Arb6camN9tSvnZa3qMaYty37nayOFoxIVLkOQX6MHXGMOimOnJyaTk3N92/Q8Z1dqIjFWc+W/Ls9NPoK9RVPDvjrO0Rnzmf6ebk5p9DWn6Jf1fwcU4zhKUZxcZR7NSWmvXumb6V+JiU2W4OG5KCS/ETg1BNvS05/mZo7JzslOc5OVk25Tb822e9q5NzfGIefiGko0uKfqcVU+UbRHeefts4i/QDZ7uQdl/z/AMBjYAdwABdR17P+DEoAgAAAAAUhV5AAB6AATsAL3G2QAUhSAUq+48vr/Yqf1Cw7dKraXRJwsTUo2Sl0xi49zb08zi6VXJ4vWl2dlcYWQl8+iX+zNHXOCa+JBSivTbi/3RvMTCwuVTox8nGxbpdMFXlzjXGx+nROb1v7mpes03P3uzpNfdsRi1OM84xmJ7w2lWH4UzYfh451uGruix1fGtxlP1jL4WT+m/lo3vBZni+q7ksCORgZtnGXRrVWbO2nKtxJR3XdDIpUotNerT+vc1eNyOdxs8XgPEnCX5Vi+Hj4UqaoXzuh2jCMa5rpnrsk1JP07myqw/A9l7ni5V3BcsoS+BKyWRxlsLJL8qlDJ/Ra3rqSfkfN6mmqOK1epmY6TMcUc+e2JhsXb1N2IroxTPWI/T9uTUeNr+dzc7iovg78O7Hxb7FOhQyZ5E3Lc5xyMaPeMUlrfdbe0uo1vH+GcXOs8NY9XKY+VyHL5e7sbCasjhYdcVOyWTN6krPZdPo+7PoPhvO8ZZ2A7oZ/EZuVjZFmLyGHl0yxrqLa5uKSycGUoPqS3FurT9+xy+HrJ8j4j8V8/l4VOJZxGNDg64VWxvX4mMpO2btjCPU96W+ldml6G7ob9dM/lpiIijnif6nf1y5UxxVxMb5nk6/M1UPPyppdOHgURqrS/prxcOvWl+zf3Pj19s8rIvvn/VbZOx+35nvR9Q8Y5iw+DzGnq7k8iOHX7qpfq2tfZRT/ANR8uiklHfltN6Xc2/DZm5TVen+U7Ot4pqJufT02dqI+7k+Jkzsosu3eqVXGMbnKUXCt7Vb7716H0rDv5DkPCleZmSdFEsuOFxOFiN043wq3Kdt1la/qfom2z5vTVbfOnGoj1XZN1dFMdv8ANO2ShFfyfbeR4+nGr4HhKe9PG4tNPb/NZJLqk/m+2/qZ669Fu368o+fOSeE1Y1VOZ25z7fMdpfN/EuDZRg8JHpnLI5HIyJ01QTcnXWoUx1Fd25SbS/0nucR+IMbBw8DjODpwacbHqr+LzGVCLbjFfEsnjYW5b3tvqmjX8nVmcv45wMPh44c/+2MOvrlmwunjRuqluTlGlqTkpyWl1LvH2RhkX2cjyHM4nN+J8f8A6HgKui1YkqONoys2SUp0JRlO2cYLe+77/wA8vxGjMU6faYpjinnP2jaZ7y8L2uq1Wpr1FXXl26NJKFvMSu5TmuYjXj4uXdRxcsayvDosjW2p3UqX59N609b7efY6ORk+GMNqdVVl9lm3Xb8K2bsa7bjbk639kze23+C+Jxp5eBw2Vk0VOK/FwwrVQpyeor8VnLq7/KLOrbi5+RkLnvElNfHYdVKhx/H2PWQ65NpSVL/V7925NLf0R6aeiq9V+2qm3Han2xG/fk3LOqjTxFNHDNc85mOL3327Rh5jMycjNSlZW6cOD3Gva+JN+SlLff8Ag1NnRt9O9em/M3XI5HH3W2yxq7emUm1K2X9oo0ti037M7lmmKYxEYhz/ABG7Vdr46quKZ6z82j0cYANhyAAAANgAAGBAAAAAAq8iACgAAQF0BC6GtFAmgUAQqIArNPR2Kb/hNtV0z36XVxsX7S7HV2VMxmHpTVh6OXMZ/IYWHg/ivhrj7Y5HHRslv4M4d1Gm2W5pL0W9fQ9Vj+O641QxvFHCTmpJQnfRCq2m5pd26Lv09+r1P7I+b1TUJRk4Qn0vfTYm4/dJo9Xw/iirEcKcnjqLcdpdUK3KGpJqSnWk9KRztXpLeoxFynOOucTDft1U10zPHwz5Y5vTTz/8MvwmfynE5kuN5KjFunSuPnkYGTOzX5KlT3plt6TXS169ju8IruL8NcXi3dSzuVsv5fN69/FcbZarc999y8zxPIeIuAyufp5C3iFbiYcY/CpUaaZZdyl1/EzHGPdey9ktt+vds8c4V992TkYeZZdbPqlL4tS+SSXT5JdkjnXtJes2ardjiqmeszE4jv8AObZ0E2KLvHfqiIjvv8l1PHGb+K5PA4+D/TwMWDn7fHyUrpv9uhfY8zNNS0n/ALaNhzfLYfLcnXm4+PbSni00WxulGUpWVpx69wS9OlfY1srOhSfSm35N77HX0dqbWnoomMYho37lNd2qrOcy9j/h7xkc/wAR4t84t4vDVTzsibS6fi941KT99/mX+lntuZ5lYDz+WlHrlQpX1Qfk7erVafy307+SPI8P448PcNw9PF4vFZylLptzr/jUdeTe0uqUn076f/Fe37vp8p4w4rkMPOxlx+XF5FE64yndU1Gb7xk0o77PTORrLepv6ijFueCJ84/33buivWbdNdddWKpjENr4Q43jLOM5Dmud5y/Er5PJuhbTHkYYdeZVW31Sv6dWtuUp6Sa+/UdyfiL/AAv4V9PFcdHKyIrprlh4i6t+34nM/U/ZM0Hg7jfCWTiZ2Ty7r/GQm1iRzLejF6YRUpS6YtbfdJJvXyZhm834coU6+P42LslKXxsiMaaFZ20o1xqgkofRHvf0FN67VVcrqmJ/jG0fPdp2bU4iZmKY815fxXynK5HH230vA47ByYZdGLXJTvtvre42WytWm16fkSW/LuaHP5CrNuttWOo2WTlOV1l192TbJ/5rrLpy2/c6eTfDIsc41KrfmlOcl/8AdtnX2dKxYos0RRbpxEdGFdzhqnE59XJKbOGT3srZizZiMNeqvKAAyeQCAB3KQAUEAAAAAAAAAF2CAClIAKQAC7G0QgGRP+QAK/48l9B3C7soVYnLB6fs0+zOJF2TCxLsOxrvpfsvUxdvyj+xwthPXf28vqTDOKmbmtvsvqkY9Xmcey7LEMZnLk6vkiqfyRxF2MES5lLz12T2n5EkcaloOWxCTMyNkJvzJsqKRjY2EQAAQpAFCgBAAAQBgAAAAAAFAAAAB3HcDYAgADuUhV6hVRR5f7gAAAgRjaIFB3A2Bkn+4IN/QCsmybAAqWyFXqAIZMgRAAAa9iFIBQQoAAAQAAAAAAAApCrv/wCwAHkABCkAAAChdnv2IAM2QAC+RGxv1/YxCr/6AKBAChEQ9yk7BQEAFAARe5CkAAEAFIABSACggAAAAAAAAAAAAUgAFAAaGgX/APMDEugTbXkBR5Dqfy/buQKuwTRQLv2JspAgUhQICmIAAAAABkQgCqAP7+gRAAAAAAAAAUAQFAEKABCgAAAAAAAe4AEAAFa0F5gBeowAEUeugAAAAf8AkYgBQABAAAUAACAAAAAKAAAAEKABAAB//9k='></img> vs <img  onClick={ ()=>toggleDiv(setTime8,time8)}  className='img' src='data:image/jpeg;base64,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'></img>
                       
                        
                    </div>

                </a>
                
                

            </div>
        </div>
    );

}

export default Diaum;
/*
 <div className='partida' >
                    <img onClick={()=>toggleDiv(setTime7,time7)} className='img' src={jogo4j1}></img> vs <img  onClick={ ()=>toggleDiv(setTime8,time8)}  className='img' src={jogo4j2}></img>
                    <div  className={time7 ? 'none': 'escolhaT'}>
                        <button onClick={()=>colocar(setJogo4j1,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                        <button onClick={()=>colocar(setJogo4j1,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                    <div  className={time8 ? 'none': 'escolhaT'}>
                    <button onClick={()=>colocar(setJogo4j2,'https://th.bing.com/th/id/OIP.Tzt90XaNq7T5HMAzeBn_YQHaHa?w=132&h=181&c=7&r=0&o=5&pid=1.7')}>BNH</button>
                    <button onClick={()=>colocar(setJogo4j2,'https://th.bing.com/th?q=Titan+LOL+Tristana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247')}>GGFFRJ</button>
                    </div>
                </div>

*/
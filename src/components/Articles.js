import React from 'react'
import {SiGnu} from 'react-icons/si';
import { Link } from 'react-router-dom';         

const Articles = () => {


  return (
    <>
        <div className='art_container'>
        
        <div className='art_contain left_side'>
          <div className='container-1 all-container'>
          <p className='magazine'>Dailypost - Magazine</p>
          <div className='line'></div>
          <img className='art_img' src='https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg?auto=compress&cs=tinysrgb&w=400' />
          <p className='date'>12 december 2022</p>
          <h4 className='art_title title-bold'>How Do I Find a New Style Identity?</h4>
          <p className="art_dis">I know that in such a situation clothes can seem like the least of the matter, but they are among the most intimate ways we reveal ourselves to those around us (they do, after all, intermediate between our skin and the outside world).</p>
          <Link to='/fasion' className='link'>
          <div className='read'>
          <p>Read More....</p>
          </div>
          </Link>
          </div>

          <div className='container-2 all-container'>
          <p className='magazine'>Dailypost - Magazine</p>
          <div className='line'></div>
          <img className='art_img' src='https://wallpapershome.com/images/wallpapers/mountains-720x1280-macos-4k-5k-sierra-sky-android-wallpaper-11473.jpg' />
          <p className='date'>15 Januvary 2023</p>
          <h4 className='art_title title-bold'>Following a Folk Tale Through the Himalayas</h4>
          <p className="art_dis">In a high hamlet, a two-hour trek up a verdant slope beneath ice-clad Himalayan peaks, an argument erupted over a folk tale. Two brothers, Pralad Singh Dariyal, 60, and Hira Singh Dariyal, 77, heatedly debated which nearby village in the Johar Valley was once the home of the story’s heroine.</p>
          <div className='read'>
          <p>Read More....</p>
          </div>
          </div>
        </div>

        <div className='art_contain left_side'>
          <div className='container-3 all-container'>
            <p>Newspaper from Artival.com</p>
            <p className='logo'><SiGnu /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor,</p>
          <p className='magazine'>Dailypost - Magazine</p>
          <img className='art_img' src='https://e0.pxfuel.com/wallpapers/66/609/desktop-wallpaper-rutgers-mbb-managers-twitter-retro-basketball.jpg' />
          <p className='date'>12 december 2022</p>
          <h4 className='art_title title-bold'>Furious Finishes Set the Final Four: Miami and San Diego State Are In</h4>
          <p className="art_dis">Miami, trailing and listless for much of the first 30 minutes of its round-of-8 game against Texas on Sunday, mounted a stunning, compact comeback in the men’s N.C.A.A. tournament to claim the last spot in the Final Four next weekend in Houston.</p>
          <Link to='/sports' className='link'>
          <div className='read'>
          <p>Read More....</p>
          </div>
          </Link>
          </div>

          <div className='container-4 all-container'>
          <p className='magazine'>Dailypost - Magazine</p>
          <div className='line'></div>
          <img className='art_img' src='https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className='date'>12 december 2022</p>
          <h4 className='art_title title-bold'>Photo Model</h4>
          <p className="art_dis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor, egestas sit amet ipsum dapibus, faucibus auctor ipsum.</p>
          <div className='read'>
          <p>Read More....</p>
          </div>
          </div>
        </div>

        <div className='art_contain'>
        <div className='container-5 all-container'>
        <p className='magazine'>Dailypost - Magazine</p>
        <div className='line'></div>
          <img className='art_img' src='https://images.pexels.com/photos/3872385/pexels-photo-3872385.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
          <p className='date'>12 december 2022</p>
          <h4 className='art_title title-bold'>Photo Model</h4>
          <p className="art_dis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor, egestas sit amet ipsum dapibus, faucibus auctor ipsum.</p>
          <div className='read'>
          <p>Read More....</p>
          </div>
          </div>
          <div className='container-6 all-container'>
            <div className='line'></div>
            <p>Newspaper from Artival.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor,</p>
        <p className='magazine'>Dailypost - Magazine</p>
          <img className='art_img' src='https://images.pexels.com/photos/7520814/pexels-photo-7520814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className='date'>12 december 2022</p>
          <h4 className='art_title title-bold'>Photo Model</h4>
          <p className="art_dis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor, egestas sit amet ipsum dapibus, faucibus auctor ipsum.</p>
          <div className='read'>
          <p>Read More....</p>
          </div>
          </div>
        </div>
        
        </div>

        <div className='class-7-container'>
          <div className='class-7'>
          <div className='container-7'>
            <div className='container-7-slpit'>
          <img className='art_img' src='https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className='title-7'>Adam Philips</p>
          </div>
          <p className='date-7'>12 december 2022</p>
          <h4 className='art_title title-bold'>Photo Model</h4>
          <p className="art_dis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus dolor, egestas sit amet ipsum dapibus, faucibus auctor ipsum  consectetur adipiscing elit. Quisque lacus dolor, egestas sit amet ipsum dapibus, faucibus auctor ipsum..</p>
        </div>
        </div>
        </div>
        </>
  )
}

export default Articles




           
$('./body') {
 inject_top( read("header.html") )

 $("./div[@id='mw_header']") {
    # main banner
    $("./div[@id='mw_main_banner']") {
      # logo
      $("./div[@id='mw_logo']") {
        move_here("//div[@class='headercontent']/a[1]")
      }
      # title
      $("./div[@id='mw_title']") {
        insert("h2"){
          text("News")
        }
      }
    }

    # sub banner 
    $("./ul[@id='mw_sub_banner']") {
      # news
      $("./li[@id='mw_news']") {
        move_here("//li[@class='navnews']/a") {
          text("News")
        }
      }

      # programs
      $("./li[@id='mw_programs']") {
        move_here("//li[@class='navprograms']/a") {
          # you have to change the href too
          attribute("href", "/programs")
          text("Programs")
        }
      }
      # stations
      $("./li[@id='mw_stations']") {
        move_here("//a[@class='find']") {
          text("Radio")
        }
      }
      # search
      $("./li[@id='mw_search']") {
        move_here("//form[@id='searchForm']") {
          $("./label") {
            remove()
          }
        }
      }

      # add header links class
      $("./li[not(@id='mw_search')]"){
        add_class("mw_header_link")
      }
    } 

    # remove the rest
    add_class("mw_keep")
    $(".//*"){
      add_class("mw_keep")
    }
    $("..//*[not(contains(@class, 'mw_keep'))]"){
      remove()
    }
  }
}
const test = document.querySelector(".test");

const component = () => {
    let div ="";
    div = `<div>
    <div class="container-lg border my-3 mx-3 main-card">
        <div
          class="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-3 border-bottom"
        >
          <h1 class="h3 mb-0 font-weight-bold" style="color: black">ต้นทุนคงที่</h1>
        </div>
    
        <div class="container row m-0 w-80 p-0">
          <div class="col-3">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="txtSearch"
                placeholder="ค้นหาข้อมูล"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white border-right-0"
                  id="basic-addon3"
                  >เดือน :</span
                >
              </div>
              <select
                class="form-control border-left-0"
                id="month"
                style="color: blue;"
              >
                <option selected value="1">มกราคม</option>
                <option value="2">กุมภาพันธ์</option>
                <option value="3">มีนาคม</option>
                <option value="4">เมษายน</option>
                <option value="5">พฤษภาคม</option>
                <option value="6">มิถุนายน</option>
                <option value="7">กรกฏาคม</option>
                <option value="8">สิงหาคม</option>
                <option value="9">กันยายน</option>
                <option value="10">ตุลาคม</option>
                <option value="11">พฤศจิกายน</option>
                <option value="12">ธันวาคม</option>
              </select>
            </div>
          </div>
    
          <div class="col-2">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white border-right-0"
                  id="basic-addon3"
                  >ปี :</span
                >
              </div>
              <select
                class="form-control border-left-0"
                id="year"
                style="color: blue;"
              >
                <option selected >2566</option>
                <option >2565</option>
                <option >2564</option>
                <option >2563</option>
                <option >2562</option>
                <option >2561</option>
                <option >2560</option>
              </select>
            </div>
          </div>
    
          <div class="col-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-white border-right-0"
                  id="basic-addon3"
                  >Process :</span
                >
              </div>
              <select
                class="form-control border-left-0"
                id="process"
                style="color: blue;"
              >
                <option >Dirty Zone</option>
                <option >Sterile Zone</option>
              </select>
            </div>
          </div>
        </div>
    
        <div class="row m-0" >
          <div class="col-3 p-0 " >
            <div class="card" style="height: 100%;">
              <div class="card-header bg-white border-bottom-0">
                <h4 class="font-weight-bold" style="color: black">รายการเครื่อง</h4>
              </div>
              <div class="card-body p-0 d-flex flex-column" style="height:400px">
                <div class="container mb-sm-2 ">
                  <div class="input-group border dropdown-container p-sm-2">
                    <span>
                      <i
                      class="fas fa-search mr-sm-1"
                      style="color: lightslategray"
                    ></i>
                    </span>
                    <input
                      type="text"
                      id="searchInput"
                      class="p-0 border-0 form-control"
                      placeholder="ค้นหาข้อมูล"
                      aria-label="Search"
                      aria-describedby="searchButton"
                      style="box-shadow: none;"
                    />
                  </div>
                </div>
              
                <div class="container p-0" style="flex: 1 1 auto;overflow-y: auto;">
                 
                      <ul
                        id="results"
                        class="p-0"
                        style="list-style-type: none;"
                      ></ul>
                    
                </div>
              </div>
            </div>
          </div>
    
          <div class="col-9 p-0">
            <div class="card">
              <div class="card-body pb-0 px-0">
                <h4
                  class="font-weight-bold px-sm-2"
                  style="color: black"
                  id="title"
                >WD #1</h4>
    
                <!-- navbar button -->
                <div class="container text-center m-0 mb-0">
                  <div class="row row-cols-4">
                    <div class="col p-0">
                      <button
                        class="btn-block btnClick_Fixed-cost"
                        id="btnClick1"
                      >
                        <div class="row align-items-center m-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                          </svg>
                          <div class="col">
                            <p
                              class="btnClick_Span1_Fixed-cost text-left m-0"
                              id="spanClick1_text1"
                            >
                              กรอกรายการต้นทุน
                            </p>
                            <h5
                              class="btnClick_Span2_Fixed-cost text-left"
                              id="spanClick1_text2"
                            >
                              1 ครั้งต่อเดือน
                            </h5>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div class="col p-0">
                      <button
                        class="btn-block btnClick_No_Fixed-cost"
                        id="btnClick2"
                      >
                        <div class="row align-items-center m-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
                          </svg>
                          <div class="col">
                            <p
                              class="btnClick_Span1_Fixed-cost text-left m-0"
                              id="spanClick2_text1"
                            >
                              กรอกรายการต้นทุน
                            </p>
                            <h5
                              class="btnClick_Span2_Fixed-cost text-left"
                              id="spanClick2_text2"
                            >
                              1 ครั้งต่อสัปดาห์
                            </h5>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div class="col p-0">
                      <button
                        class="btn-block btnClick_No_Fixed-cost"
                        id="btnClick3"
                      >
                        <div class="row align-items-center m-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-3-circle" viewBox="0 0 16 16">
                            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                          </svg>
                          <div class="col">
                            <p
                              class="btnClick_Span1_Fixed-cost text-left m-0"
                              id="spanClick3_text1"
                            >
                              กรอกรายการต้นทุน
                            </p>
                            <h5
                              class="btnClick_Span2_Fixed-cost text-left"
                              id="spanClick3_text2"
                            >
                              1 ครั้งต่อวัน
                            </h5>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div class="col p-0">
                      <button
                        class="btn-block btnClick_No_Fixed-cost"
                        id="btnClick4"
                      >
                        <div class="row align-items-center m-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-4-circle" viewBox="0 0 16 16">
                            <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                          </svg>
                          <div class="col">
                            <p
                              class="btnClick_Span1_Fixed-cost text-left m-0"
                              id="spanClick4_text1"
                            >
                              กรอกรายการต้นทุน
                            </p>
                            <h5
                              class="btnClick_Span2_Fixed-cost text-left"
                              id="spanClick4_text2"
                            >
                              ต้นทุนต่อรอบ
                            </h5>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="card border-bottom-0 ">
              <div class="card-body p-0">
                  <div class="col-12 p-0">
                    <h3 style="font-weight: bold; color: black" id="textHeadChange">
                      1 ครั้งต่อเดือน
                    </h3>
                    
                    <!-- table section -->
                    <div class="table-responsive-lg" style="height: 45vh;overflow-x: auto;">
                      <table
                      id="table_main1"
                      class="table table-hover w-100"
                    >
                      <thead class="thead-light" style="position: sticky;top: 0;">
                        <tr class="text-center">
                          <th style="text-align: center">ลำดับ</th>
                          <th style="text-align: center">ชื่อต้นทุน</th>
                          <th style="text-align: center">ต้นทุน(บาทต่อเดือน)</th>
                          <th style="text-align: center">Action</th>
                        </tr>
                      </thead>
                    </table>
    
                    <table
                      id="table_main2"
                      class="table table-hover w-100"
                      hidden
                    >
                      <thead class="thead-light">
                        <tr class="text-center">
                          <th style="text-align: center">ลำดับ</th>
                          <th style="text-align: center">ชื่อต้นทุน</th>
                          <th style="text-align: center">ต้นทุน(บาทต่อสัปดาห์)</th>
                          <th style="text-align: center">Action</th>
                        </tr>
                      </thead>
                    </table>
    
                    <table
                      id="table_main3"
                      class="table table-hover w-100"
                      hidden
                    >
                      <thead class="thead-light">
                        <tr class="text-center">
                          <th style="text-align: center">ลำดับ</th>
                          <th style="text-align: left">ชื่อต้นทุน</th>
                          <th style="text-align: center">ต้นทุน(บาทต่อวัน)</th>
                          <th style="text-align: center">Action</th>
                        </tr>
                      </thead>
                    </table>
                    
                    <table
                      id="table_main4"
                      class="table table-hover w-100"
                      hidden
                    > 
                    </table>
                    </div>
                    
                  </div>
                  
              </div>
    
                <div id="footer" class="d-flex flex-column">
                  <div id="aboveSum" class="card-body d-flex flex-row border border-bottom-0 pb-0 bg-light invisible" hidden>
                    <div class="col-6">
                      <p style="text-align: right;font-weight: bold;">รวม</p>
                    </div>
                    <div class="col-6">
                      <p id="value2" style="text-align: center; font-weight: bold;"> </p>
                    </div>
                  </div>
                  <div class="card-body d-flex flex-row border border-bottom-0 pb-0 bg-light" >
                    <div class="col-6">
                      <p id="text1" style="text-align: right;font-weight: bold;">รวม</p>
                    </div>
                    <div class="col-6">
                      <p id="value1" style="text-align: center; font-weight: bold;"> </p>
                    </div>
                </div>
    <!-- 
                <div id="footer4" class="d-flex flex-column" hidden>
                  <div class="card-body d-flex flex-row border border-bottom-0 pb-0 bg-light" >
                    <div class="col-3">
                      <p style="text-align: right;font-weight: bold;">รวม</p>
                    </div>
                    <div id="values" class="col-9">
                      <p id="value1" style="text-align: center; font-weight: bold;"> </p>
                    </div>
                </div> -->
    
                </div>
    
              <div class="card-footer d-flex flex-row justify-content-end align-self-end bg-transparent border-0">
              <button type="button" id="back-btn" class="btn btn-secondary mr-sm-2 disabled" onclick=""><i class="fas fa-arrow-left"></i> ย้อนกลับ</button>
              <button type="button" id="next-btn" class="btn btn-primary d-flex align-items-center">ถัดไป : <p id="btn_textHeadChange" class="m-0"> 1 ครั้งต่อเดือน <i class="fas fa-arrow-right"></i></p></button>
              </div> 
            </div>
          </div>
        </div>
</div>`
test.innerHTML = div
}

component();